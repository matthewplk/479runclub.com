// app/components/RunCollageBackground.tsx
"use client";

import Image from "next/image";

const photos = [
  "/group/rungroup1.JPG",
  "/group/rungroup2.JPG",
  "/group/rungroup3.JPG",
  "/group/rungroup4.jpg",
  "/group/rungroup5.jpg",
  "/group/rungroup6.jpg",
  "/group/rungroup7.jpg",
  "/group/rungroup8.jpg",
  "/group/rungroup9.jpg",
  "/group/rungroup10.jpg",
  "/group/rungroup11.jpg",
  "/group/rungroup12.jpg",
  "/group/rungroup13.jpg",
  "/group/rungroup14.jpg",
  "/group/rungroup15.jpg",
  "/group/rungroup16.jpg",
  "/group/rungroup17.jpg",
  "/group/rungroup18.jpg",
  "/group/rungroup19.jpg",
  "/group/rungroup20.jpg"
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
