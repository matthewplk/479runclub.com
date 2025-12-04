"use client";

const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type RunInfo = {
  time: string;
  title: string;
  location: string;
};

type DayInfo = {
  dayLabel: string;
  dateLabel: string;
  run: RunInfo | null;
  isToday: boolean;
};

function getWeekDays(): DayInfo[] {
  const today = new Date();
  // Reset time to midnight to ensure accurate comparisons
  today.setHours(0, 0, 0, 0);

  const days: DayInfo[] = [];

  // Loop 0 to 6 (0 being today, 1 being tomorrow, etc.)
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i); // Start at today, add 'i' days

    const weekdayIndex = date.getDay();
    const month = date.toLocaleString("default", { month: "short" });
    const dayNum = date.getDate();

    // Since i=0 is the start, the first item is always "Today"
    const isToday = i === 0; 
    
    // Check if the specific date being generated is a Saturday (6)
    const isSaturday = weekdayIndex === 6;

    days.push({
      dayLabel: weekdayNames[weekdayIndex],
      dateLabel: `${month} ${dayNum}`,
      isToday: isToday,
      run: isSaturday
        ? {
            time: "8:00 AM",
            title: "Group Run",
            location: "Gulley Park",
          }
        : null,
    });
  }

  return days;
}

export default function CalendarBanner() {
  const days = getWeekDays();

  return (
    <div className="w-full bg-gradient-to-r from-[#F03B28] to-[#FF6666] text-white py-6 shadow-lg rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 rounded-4xl">
        {/* Header */}
        <h2 className="text-2xl font-extrabold tracking-wide mb-4">
          Upcoming Schedule
        </h2>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-3 text-center text-sm">
          {days.map((d, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border border-white/20 transition-all duration-300 ease-in-out ${
                d.isToday
                  ? "bg-white/30 backdrop-blur-md shadow-2xl scale-110 z-10 ring-1 ring-white border-white"
                  : "bg-white/5 backdrop-blur-sm hover:bg-white/10"
              }`}
            >
              {/* Day name */}
              <div className="font-semibold opacity-80">
                {d.isToday ? "Today" : d.dayLabel}
              </div>

              {/* Date */}
              <div className="text-xs opacity-90">{d.dateLabel}</div>

              {/* Run info or dash */}
              {d.run ? (
                <div className="mt-2">
                  <div className="text-base font-bold">{d.run.time}</div>
                  <div className="text-xs">{d.run.title}</div>
                  <div className="text-[0.7rem] opacity-80">
                    {d.run.location}
                  </div>
                </div>
              ) : (
                <div className="mt-3 text-[0.7rem] opacity-40">—</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}