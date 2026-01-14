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
        <header className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
  
          {/* Arkansas outline logo */}
          <div className="flex-shrink-0">
            <img
              src="/branding/AROutline.jpg"
              alt="Arkansas Outline"
              className="w-60 h-60 md:w-32 md:h-32 opacity-80 "
            />
          </div>

          {/* About Us text */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              About Us
            </h1>

            <p className="mt-3 text-slate-700 max-w-3xl">
              479 Run Club is a community-first social running group in Northwest Arkansas, created with one simple idea in mind: movement is easier when you don’t have to do it alone.
              <br /><br />
              We welcome all paces, all backgrounds, and all goals. Whether you’re training for your first race or just looking to meet new people, you’ll find a supportive, uplifting group ready to cheer you on.
              <br /><br />
              We meet throughout Fayetteville, Springdale, Bentonville and the surrounding area, exploring local trails, discovering new coffee shops and restaurants, and building real friendships along the way.
              At 479, running is just the beginning.
            </p>
          </div>

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

        <a
          href="https://www.strava.com/clubs/1264373"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-3 mt-6
            rounded-full
            bg-orange-500 hover:bg-orange-600
            text-white font-semibold
            px-6 py-3
            shadow-lg hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-0.5
          "
        >
          {/* Strava Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fill-white"
            aria-hidden="true"
          >
            <path d="M120.4 288L232 64l111.6 224h-67.6L232 192l-44 96zM280 288l56 112 56-112z"/>
          </svg>

          <span>Join us on Strava</span>
        </a>

        <a
          href="https://www.instagram.com/479.runclub"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-3 mt-4 mx-4
            rounded-full
            bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
            hover:brightness-110
            text-white font-semibold
            px-6 py-3
            shadow-lg hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-0.5
          "
        >
          {/* Instagram Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-5 h-5 fill-white"
            aria-hidden="true"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.3 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zM398.8 388c-1.7 35.3-9.9 66.6-36.2 92.9-26.2 26.2-57.6 34.5-92.9 36.2-37.7 2.1-150.7 2.1-188.4 0-35.3-1.7-66.6-9.9-92.9-36.2C-7.8 454.6 0.5 423.3 2.2 388c2.1-37.7 2.1-150.7 0-188.4C.5 164.3-7.8 133 18.5 106.8 44.7 80.6 76.1 72.3 111.4 70.6c37.7-2.1 150.7-2.1 188.4 0 35.3 1.7 66.6 9.9 92.9 36.2 26.2 26.2 34.5 57.6 36.2 92.9 2.1 37.7 2.1 150.7 0 188.4z"/>
          </svg>

          <span>Follow us on Instagram</span>
        </a>


      </section>
    </main>
    </section>
  );
}
