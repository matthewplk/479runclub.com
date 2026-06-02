export type RunEvent = {
  id: string;
  date: string;       // ISO: "2026-05-24"
  time: string;       // "8:00 AM"
  title: string;
  location: string;
  address?: string;
  type: "Group Run" | "Workout" | "Social" | "Race" | "Other";
  details?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

// Converts a Google Sheets row array into a RunEvent object
function rowToEvent(row: string[], index: number): RunEvent | null {
  const [date, time, title, location, address, type, details, ctaLabel, ctaHref] = row;

  // Skip rows missing required fields
  if (!date || !time || !title || !location) return null;


  const rawType = type?.trim() ?? "";
  const validTypes = ["Group Run", "Workout", "Social", "Race", "Other"];
  const eventType = (validTypes.find(t => rawType.includes(t)) ?? "Other") as RunEvent["type"];
  //const validTypes = ["Group Run", "Workout", "Social", "Race", "Other"];
  //const eventType = validTypes.find(t => rawType.includes(t)) ?? "Other";
  //const eventType = validTypes.includes(type) ? type : "Other";

  return {
    id: `event-${index}-${date}`,
    date: parseSheetDate(date),
    time: time.trim(),
    title: title.trim(),
    location: location.trim(),
    address: address?.trim() || undefined,
    type: eventType as RunEvent["type"],
    details: details?.trim() || undefined,
    ctaLabel: ctaLabel?.trim() || undefined,
    ctaHref: ctaHref?.trim() || undefined,
  };
}

function parseSheetDate(raw: string): string {
  const parts = raw.trim().split("/");
  if (parts.length !== 3) return raw;
  const [m, d, y] = parts;
  const fullYear = y.length === 2 ? `20${y}` : y;
  return `${fullYear}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

export async function getScheduleFromSheet(): Promise<RunEvent[]> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  const range = process.env.GOOGLE_SHEET_RANGE ?? "Sheet1!A2:I100";

  if (!sheetId || !apiKey) {
    console.warn("Missing GOOGLE_SHEET_ID or GOOGLE_SHEETS_API_KEY — returning empty schedule.");
    return [];
  }

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}?key=${apiKey}`;

  const res = await fetch(url, {
    next: { revalidate: 300 }, // Cache for 5 minutes
  });

  if (!res.ok) {
    console.error("Google Sheets API error:", res.status, await res.text());
    return [];
  }

  const data = await res.json();
  const rows: string[][] = data.values ?? [];

  return rows
    .map((row, i) => rowToEvent(row, i))
    .filter((e): e is RunEvent => e !== null)
    .sort((a, b) => a.date.localeCompare(b.date));
}
