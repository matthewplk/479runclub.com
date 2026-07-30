import { getScheduleFromSheet, RunEvent } from "../lib/sheets";

const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getNext7Days(): { dayLabel: string; dateLabel: string; dateISO: string; isToday: boolean }[] {
  const today = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })
  );
  today.setHours(0, 0, 0, 0);
  const days = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const month = date.toLocaleString("default", { month: "short" });
    const dayNum = date.getDate();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    days.push({
      dayLabel: weekdayNames[date.getDay()],
      dateLabel: `${month} ${dayNum}`,
      dateISO: `${yyyy}-${mm}-${dd}`,
      isToday: i === 0,
    });
  }

  return days;
}

export default async function CalendarBanner() {
  const events = await getScheduleFromSheet();
  const days = getNext7Days();

  console.log("Raw events:", events);        // see what dates look like coming in
  console.log("Days ISO:", days.map(d => d.dateISO));  // see what calendar expects

  // Build a lookup: dateISO -> first event that day
  const eventsByDate: Record<string, RunEvent> = {};
  for (const event of events) {
    if (!eventsByDate[event.date]) {
      eventsByDate[event.date] = event;
    }
  }

  return (
    <div className="w-full bg-linear-to-r from-[#F03B28] to-[#FF6666] text-white py-6 shadow-lg rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 rounded-4xl">
        <h2 className="text-2xl font-extrabold tracking-wide mb-4">
          Upcoming Schedule
        </h2>

        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-pl-7 pb-5 -mx-4 pl-7 pr-4 sm:mx-0 sm:pl-0 sm:pr-0 sm:scroll-pl-0 sm:grid sm:grid-cols-7 sm:overflow-visible sm:pb-0 text-center text-sm">
          {days.map((d, idx) => {
            const run = eventsByDate[d.dateISO] ?? null;
            return (
              <div
                key={idx}
                className={`shrink-0 w-24 sm:w-auto min-h-[112px] sm:min-h-0 flex flex-col items-center justify-center snap-start p-4 rounded-xl border border-white/20 transition-all duration-300 ease-in-out ${
                  d.isToday
                    ? "bg-white/30 backdrop-blur-md shadow-2xl sm:scale-110 z-10 ring-1 ring-white border-white"
                    : "bg-white/5 backdrop-blur-sm hover:bg-white/10"
                }`}
              >
                <div className="font-semibold opacity-80">
                  {d.isToday ? "Today" : d.dayLabel}
                </div>
                <div className="text-xs opacity-90">{d.dateLabel}</div>

                {run ? (
                  <>
                    <div className="mt-2 text-xl sm:hidden" aria-hidden="true">
                      🏃
                    </div>
                    <div className="hidden sm:block mt-2">
                      <div className="text-base font-bold">{run.time}</div>
                      <div className="text-xs">{run.title}</div>
                      <div className="text-[0.7rem] opacity-80">{run.location}</div>
                    </div>
                  </>
                ) : (
                  <div className="mt-3 text-[0.7rem] opacity-40">—</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}