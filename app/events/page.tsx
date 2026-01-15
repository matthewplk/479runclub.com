import Link from "next/link";

type RunEvent = {
  id: string;
  title: string;
  dateISO: string; // e.g. "2026-01-18"
  time: string; // e.g. "8:00 AM"
  location: string;
  address?: string;
  type: "Group Run" | "Workout" | "Social" | "Race" | "Other";
  details?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const MOCK_EVENTS: RunEvent[] = [
  {
    id: "sat-group-run",
    title: "Saturday Morning Group Run",
    dateISO: "2026-01-17",
    time: "8:00 AM",
    location: "Wilson Park (Main Entrance)",
    address: "Fayetteville, AR",
    type: "Group Run",
    details: "All paces welcome. Choose 3–6 miles. We regroup after.",
    ctaLabel: "Add to Calendar",
    ctaHref: "#",
  },
  {
    id: "weekday-workout",
    title: "Midweek Tempo / Workout Session",
    dateISO: "2026-01-21",
    time: "6:00 PM",
    location: "Razorback Greenway",
    address: "Northwest Arkansas",
    type: "Workout",
    details: "Warm-up + workout + cooldown. Bring a headlamp if needed.",
    ctaLabel: "View Route",
    ctaHref: "#",
  },
  {
    id: "coffee-social",
    title: "Coffee + Hangout After Run",
    dateISO: "2026-01-24",
    time: "9:15 AM",
    location: "Local Coffee Spot (TBD)",
    type: "Social",
    details: "Post-run social. We’ll finalize the spot soon.",
    ctaLabel: "Check Updates",
    ctaHref: "#",
  },
  {
    id: "spring-race",
    title: "Spring Race Meetup",
    dateISO: "2026-02-07",
    time: "7:00 AM",
    location: "Race Start Area (TBD)",
    type: "Race",
    details: "If you’re running the race, meet us for warm-up and a group photo.",
    ctaLabel: "Race Info",
    ctaHref: "#",
  },
];

function formatDate(dateISO: string) {
  // Ensures consistent formatting without needing client-side Date logic
  // (This file is a Server Component by default)
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

export default function EventsPage() {
  const upcoming = MOCK_EVENTS
    .filter((e) => isUpcoming(e.dateISO))
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO));

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}

      {/* Info Bar */}
      <section className="mb-10 bg-slate-100 border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-slate-900">
            This is a mock events page (for now).
          </p>
          <p className="text-slate-600">
            Later, we’ll showcase upcoming runs, workouts, and socials!
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/"
            className="rounded-xl bg-white px-4 py-2 text-slate-900 font-semibold shadow border border-slate-200 hover:bg-slate-50 transition"
          >
            Back Home
          </Link>
          <Link
            href="/contact"
            className="rounded-xl bg-slate-900 px-4 py-2 text-white font-semibold shadow hover:opacity-95 transition"
          >
            Ask a Question
          </Link>
        </div>
      </section>

      {/* Events List */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {upcoming.map((event) => (
          <article
            key={event.id}
            className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-600">
                  {formatDate(event.dateISO)} • {event.time}
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  {event.title}
                </h2>
              </div>

              <span className="shrink-0 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                {event.type}
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-slate-700">
                <span className="font-semibold">Where:</span> {event.location}
                {event.address ? ` — ${event.address}` : ""}
              </p>

              {event.details ? (
                <p className="text-slate-700 leading-relaxed">{event.details}</p>
              ) : null}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {event.ctaHref && event.ctaLabel ? (
                <a
                  href={event.ctaHref}
                  className="rounded-xl bg-slate-900 px-4 py-2 text-white font-semibold shadow hover:opacity-95 transition"
                >
                  {event.ctaLabel}
                </a>
              ) : null}

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

      {/* Empty state (if no events) */}
      {upcoming.length === 0 && (
        <div className="text-center mt-14">
          <p className="text-lg text-slate-700 font-semibold">
            No upcoming events posted yet.
          </p>
          <p className="text-slate-600 mt-2">
            Check back soon — we’ll update this page as runs are scheduled.
          </p>
        </div>
      )}
    </main>
  );
}
