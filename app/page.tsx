import EventOverview from "@/components/EventOverview/EventOverview";
import HeroSwiper from "@/components/HeroSwiper/HeroSwiper";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <HeroSwiper />
        <EventOverview />
      </div>
    </main>
  );
}
