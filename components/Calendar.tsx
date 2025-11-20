"use client";

const days = [
  { day: "Sun", run: null },
  { day: "Mon", run: null },
  { day: "Tue", run: null },
  { day: "Wed", run: null },
  { day: "Thu", run: null },
  { day: "Fri", run: null },
  {
    day: "Sat",
    run: {
      time: "8:00 AM",
      title: "Group Run",
      location: "Gulley Park",
    },
  },
];

export default function CalendarBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-[#F03B28] to-[#FF6666] text-white py-6 shadow-lg rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <h2 className="text-2xl font-extrabold tracking-wide mb-4">
          This Week’s Schedule
        </h2>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-3 text-center">
          {days.map((d, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border border-white/20 ${
                d.run
                  ? "bg-white/20 backdrop-blur-md shadow-md"
                  : "bg-white/5 backdrop-blur-sm"
              }`}
            >
              <div className="text-sm font-semibold opacity-80">{d.day}</div>

              {d.run ? (
                <div className="mt-2">
                  <div className="text-lg font-bold">{d.run.time}</div>
                  <div className="text-sm">{d.run.title}</div>
                  <div className="text-xs opacity-80">{d.run.location}</div>
                </div>
              ) : (
                <div className="mt-2 text-xs opacity-40">—</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
