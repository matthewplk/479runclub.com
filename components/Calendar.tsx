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
  isToday: boolean; // 1. Added this field
};

function getWeekDays(): DayInfo[] {
  const today = new Date();

  // Find Sunday of the current week
  const startOfWeek = new Date(today);
  startOfWeek.setHours(0, 0, 0, 0);
  const dayOfWeek = startOfWeek.getDay(); // 0 = Sun, 6 = Sat
  startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek);

  const days: DayInfo[] = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);

    const weekdayIndex = date.getDay();
    const month = date.toLocaleString("default", { month: "short" });
    const dayNum = date.getDate();

    // 2. Check if this specific date is actually "Today"
    const isToday = date.toDateString() === today.toDateString();

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
          This Week’s Schedule
        </h2>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-3 text-center text-sm">
          {days.map((d, idx) => (
            <div
              key={idx}
              // 3. Changed condition from `d.run` to `d.isToday`
              className={`p-4 rounded-xl border border-white/20 ${
                d.isToday
                  ? "bg-white/10 backdrop-blur-md shadow-xl ring-2 ring-white/30 scale-110 border-white"
                  : "bg-white/5 backdrop-blur-sm"
              }`}
            >
              {/* Day name */}
              <div className="font-semibold opacity-80">{d.dayLabel}</div>

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