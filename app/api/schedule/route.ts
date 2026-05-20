import { NextResponse } from "next/server";
import { getScheduleFromSheet } from "@/lib/sheets";

export const revalidate = 300; // Revalidate every 5 minutes

export async function GET() {
  try {
    const events = await getScheduleFromSheet();
    return NextResponse.json({ events });
  } catch (err) {
    console.error("Schedule API error:", err);
    return NextResponse.json({ events: [] }, { status: 500 });
  }
}