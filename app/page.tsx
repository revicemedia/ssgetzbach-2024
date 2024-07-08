// @ts-nocheck

import EventOverview from "@/components/EventOverview/EventOverview";
import HeroSwiper from "@/components/HeroSwiper/HeroSwiper";
import HomeBreakComponent from "@/components/HomeBreakComponent/HomeBreakComponent";
import StartNews from "@/components/News/StartNews";
import { client } from "@/contentful";

async function getSlideshow() {
  // @ts-ignore
  const res = await client.getEntries({
    content_type: "homeSlideshow",
    order: "fields.positionierung",
  });

  return res;
}

async function getHomeEvents() {
  // @ts-ignore
  const res = await client.getEntries({
    content_type: "homeSpiele",
    order: "fields.fullDate",
  });

  return res;
}

async function getHomeNews() {
  // @ts-ignore
  const res = await client.getEntries({
    content_type: "newsDisplayStartseite",
  });

  return res;
}

export default async function Home() {
  const slides = await getSlideshow();
  const news = await getHomeNews();
  const events = await getHomeEvents();

  const filteredNews = news.items[0].fields.verlinkteNews;

  return (
    <div className="pt-24 bg-gray-50">
      <HeroSwiper slides={slides} />
      <EventOverview data={events} />
      <HomeBreakComponent />
      <StartNews showHeadline={true} data={filteredNews} />
    </div>
  );
}
