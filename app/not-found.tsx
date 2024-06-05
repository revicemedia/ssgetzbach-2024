import EventOverview from "@/components/EventOverview/EventOverview";
import Footer from "@/components/Footer/Footer";
import HeroSwiper from "@/components/HeroSwiper/HeroSwiper";
import Navbar from "@/components/Navbar/Navbar";
import News from "@/components/News/News";
import NotFound from "@/components/NotFound/NotFound";
import { client } from "@/contentful";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <div className="w-full pt-24 bg-gray-50">
        <NotFound />
      </div>
      <Footer />
    </main>
  );
}
