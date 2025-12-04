import Hero from "@/components/Hero";
import CalendarBanner from "@/components/Calendar";

export default function Home() {
  return (
    <div className="space-y-10">
      <CalendarBanner />
      <Hero />
     
    </div>
  );
}
