import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      {/* Page Header */}
     

      {/* Founder Section */}
      <section className="bg-slate-100 rounded-3xl p-8 sm:p-12 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/branding/KathrineLee.jpeg"

                alt="Founder of 479 Run Club"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>

          {/* Founder Bio */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Meet Our Founder - Kathrine Lee
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed">
             Hi, I'm Kathrine, the founder of 479 Run Club. I started this run club because running was never just about the miles for me; It
             was about having something that grounded me, challenged me, and connected me to people when I needed it most. 
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed">
             I wanted to create a space where showing up mattered more than pace,
             where movement felt fun instead of intimidating, and where community came before competition. What began as a few of us meeting up to run has turned into something so much bigger than I imagined, and I'm incredibly grateful for every person who shows up,
             supports one another, and makes 479 Run Club what it is.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
