import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 max-w-4xl mx-auto">
      <Link href="/" className="text-xl font-bold">
        479 Run Club
      </Link>

      <div className="flex gap-6">
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
      </div>
    </nav>
  );
}
