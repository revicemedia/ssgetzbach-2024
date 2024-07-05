// @ts-nocheck

import NewsDisplay from "@/components/NewsDisplay/NewsDisplay";
import { client } from "@/contentful";

interface Params {
  params: {
    newsSlug: string;
  };
}

async function getNews({ newsSlug }: any) {
  const res = await client.getEntry({
    "fields.domainSlug": newsSlug,
  });

  return res;
}

export default async function Home({ params }: Params) {
  const data = await getNews(params.newsSlug);

  console.log(data);

  return (
    <div className="pt-24 bg-gray-50">
      <h2>Unterseite für News</h2>
      <NewsDisplay data={data} />
    </div>
  );
}
