import Link from "next/link";
import { getScheduleFromSheet, RunEvent } from "../../lib/sheets";

function formatDate(dateISO: string) {
  const date = new Date(`${dateISO}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function isUpcoming(dateISO: string) {
  const today = new Date();
  const date = new Date(`${dateISO}T23:59:59`);
  return date >= today;
}

const TYPE_COLORS: Record<RunEvent["type"], string> = {
  "Group Run": "bg-red-50 text-red-700 border-red-200",
  "Workout":   "bg-orange-50 text-orange-700 border-orange-200",
  "Social":    "bg-blue-50 text-blue-700 border-blue-200",
  "Race":      "bg-green-50 text-green-700 border-green-200",
  "Other":     "bg-slate-100 text-slate-700 border-slate-200",
};

export default async function EventsPage() {
  const allEvents = await getScheduleFromSheet();
  const upcoming = allEvents.filter((e) => isUpcoming(e.date));

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Upcoming Events</h1>
        <p className="mt-2 text-slate-600 text-lg">Runs, workouts, and socials — all in one place.</p>
      </div>

      {/* Nav */}
      <section className="mb-10 flex gap-3">
        <Link
          href="/"
          className="rounded-xl bg-white px-4 py-2 text-slate-900 font-semibold shadow border border-slate-200 hover:bg-slate-50 transition"
        >
          ← Back Home
        </Link>
        <Link
          href="/contact"
          className="rounded-xl bg-slate-900 px-4 py-2 text-white font-semibold shadow hover:opacity-95 transition"
        >
          Ask a Question
        </Link>
      </section>

      {/* Events List */}
      {upcoming.length > 0 ? (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcoming.map((event) => (
            <article
              key={event.id}
              className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    {formatDate(event.date)} · {event.time}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">{event.title}</h2>
                </div>
                <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${TYPE_COLORS[event.type]}`}>
                  {event.type}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-slate-700">
                  <span className="font-semibold">Where:</span> {event.location}
                  {event.address ? ` — ${event.address}` : ""}
                </p>
                {event.details && (
                  <p className="text-slate-600 leading-relaxed">{event.details}</p>
                )}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {event.ctaHref && event.ctaLabel && (
                  <a
                    href={event.ctaHref}
                    className="rounded-xl bg-[#F03B28] px-4 py-2 text-white font-semibold shadow hover:opacity-90 transition"
                  >
                    {event.ctaLabel}
                  </a>
                )}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${event.location} ${event.address ?? ""}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white px-4 py-2 text-slate-900 font-semibold shadow border border-slate-200 hover:bg-slate-50 transition"
                >
                  Open in Maps
                </a>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <div className="text-center mt-14">
          <p className="text-lg text-slate-700 font-semibold">No upcoming events posted yet.</p>
          <p className="text-slate-600 mt-2">Check back soon — we'll update this page as runs are scheduled.</p>
        </div>
      )}
    </main>
  );
}