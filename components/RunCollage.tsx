// app/components/RunCollageBackground.tsx/
//Potential future fix would be exporting to Photoshop, Canva, Figma, etc. and then importing as a single image instead of using the collage component. This would reduce load time and make it easier to maintain.
"use client";

import Image from "next/image";

const photos = [
  "/group/rungroup1.JPG",
  "/group/rungroup2.JPG",
  "/group/rungroup3.JPG",
  "/group/rungroup4.JPG",
  "/group/rungroup5.JPG",
  "/group/rungroup6.JPG",
  "/group/rungroup7.JPG",
  "/group/rungroup8.JPG",
  "/group/rungroup9.JPG",
  "/group/rungroup10.JPG",
  "/group/rungroup11.JPG",
  "/group/rungroup12.JPG",
  "/group/rungroup13.JPG",
  "/group/rungroup14.JPG",
  "/group/rungroup15.JPG",
  "/group/rungroup16.JPG",
  "/group/rungroup17.JPG",
  "/group/rungroup18.JPG",
  "/group/rungroup19.JPG",
  "/group/rungroup20.JPG",
];


const rotations = [
  "rotate-[-3deg]",
  "rotate-1",
  "rotate-2",
  "rotate-[-2deg]",
  "rotate-3",
];

export default function RunCollage() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* Dark base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />

      {/* Collage grid */}
      <div className="relative h-full w-full grid grid-cols-4 gap-4 p-">
        {photos.map((src, idx) => (
          <div
            key={src}
            className={`
              relative h-40 w-full overflow-hidden rounded-xl border border-white/5 
              shadow-lg shadow-black/40 
              ${rotations[idx % rotations.length]}
            `}
          >
            <Image
              src={src}
              alt="479 Run Club group run"
            
              fill
              className="object-cover grayscale"
            />
          </div>
        ))}
      </div>

      {/* Grey/darken overlay so content pops */}
      <div className="absolute inset-0 bg-slate-950/70" />
    </div>
  );
}
