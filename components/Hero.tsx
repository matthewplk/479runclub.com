export default function Hero() {
  return (
    <section className="text-center ">
     <main className="relative z-10 min-h-screen flex justify-center px-4 ">
      {/* White “space” area on top of collage */}
      <section className="
        w-full max-w-7xl 
        bg-white/85 
        backdrop-blur-sm 
        rounded-3xl 
        shadow-2xl 
        border border-slate-200/70 
        p-8 sm:p-10
        space-y-6
      ">
        <header>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            About Us
          </h1>
          <p className="mt-3 text-slate-700">
            479 Run Club is a community-first social running group in Northwest Arkansas, created with one simple idea in mind: movement is easier when you don’t have to do it alone.<br />
            We welcome all paces, all backgrounds, and all goals. Whether you’re training for your first race or just looking to meet new people, you’ll find a supportive, uplifting group ready to cheer you on.
            We meet throughout Fayetteville, Springdale, Bentonville and the surrounding area, exploring local trails, discovering new coffee shops and restaurants, and building real friendships along the way.
            At 479, running is just the beginning of connections, encouragement, and community that are at the heart of what we do.
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
