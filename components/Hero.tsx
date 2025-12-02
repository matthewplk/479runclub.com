export default function Hero() {
  return (
    <section className="text-center ">
     <main className="relative z-5 min-h-screen flex justify-center px-4 ">
      {/* White “space” area on top of collage */}
      <section className="
        w-full max-w-5xl 
        bg-white/85 
        backdrop-blur-sm 
        rounded-3xl 
        shadow-2xl 
        border border-slate-200/70 
        p-8 sm:p-10
        space-y-8
      ">
        <header>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            479 Run Club
          </h1>
          <p className="mt-3 text-slate-700">
            Weekly group runs in NWA. All paces welcome.
          </p>
        </header>

        {/* Example: other content */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
            <h3 className="font-semibold text-slate-900 mb-2">
              New to the club?
            </h3>
            <p className="text-slate-700 text-sm">
              Show up 10 minutes early, say hi, and we’ll help you find a pace group.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
            <h3 className="font-semibold text-slate-900 mb-2">
              Weekly Schedule
            </h3>
            <p className="text-slate-700 text-sm">
              Tues: Tempo • Thurs: Easy • Sat: Long Run
            </p>
          </div>
        </div>
      </section>
    </main>
    </section>
  );
}
