import Link from "next/link";

export default function PartnershipsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
    

      {/* Coming Soon Card */}
      <section className="bg-slate-100 rounded-3xl p-8 sm:p-12 shadow-lg border border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Coming Soon
          </div>

          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-slate-900">
            We’re working on something awesome.
          </h2>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Our founder has built successful partnerships before, and we’re excited
            to bring that same energy to 479 Run Club. This page will soon include
            sponsor spotlights, partner benefits, and how local businesses can get involved.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="rounded-xl bg-slate-900 px-6 py-3 text-white font-semibold shadow hover:opacity-95 transition"
            >
              Back to Home
            </Link>

             <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 text-slate-900 font-semibold shadow border border-slate-200 hover:bg-slate-50 transition"
            >
              Partnership Inquiry
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Want to collaborate? Reach out and we’ll respond soon.
          </p>
        </div>
      </section>
    </main>
  );
}
