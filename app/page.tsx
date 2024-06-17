// @ts-nocheck

import EventOverview from "@/components/EventOverview/EventOverview";
import Footer from "@/components/Footer/Footer";
import HeroSwiper from "@/components/HeroSwiper/HeroSwiper";
import HomeBreakComponent from "@/components/HomeBreakComponent/HomeBreakComponent";
import Navbar from "@/components/Navbar/Navbar";
import News from "@/components/News/News";
import { client } from "@/contentful";

async function getSlideshow() {
  // @ts-ignore
  const res = await client.getEntries({
    content_type: "homeSlideshow",
    order: "fields.positionierung",
  });

  return res;
}

export default async function Home() {
  const slides = await getSlideshow();

  console.log(slides);

  return (
    <div className="pt-24 bg-gray-50">
      <HeroSwiper slides={slides} />
      <EventOverview />
      <HomeBreakComponent />
      <News showHeadline={true} />
    </div>
  );
}
