import EventOverview from "@/components/EventOverview/EventOverview";
import Footer from "@/components/Footer/Footer";
import HeroSwiper from "@/components/HeroSwiper/HeroSwiper";
import Navbar from "@/components/Navbar/Navbar";
import News from "@/components/News/News";
import { client } from "@/contentful";

async function getSlideshow() {
  const res = await client.getEntries({content_type: "homeSlideshow", order: "fields.positionierung"})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  return res
}

export default async function Home() {

  const slides = await getSlideshow()

  console.log(slides)

  return (
    <main>
      <Navbar />
      <div className="pt-24 bg-gray-50">
        <HeroSwiper slides={slides}/>
        <EventOverview />
        <News />
      </div>
        <Footer />
    </main>
  );
}
