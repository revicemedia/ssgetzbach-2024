// @ts-nocheck

import NewsBerichteDetails from "@/components/NewsBerichteDetails/NewsBerichteDetails";
import { client } from "@/contentful";

interface Params {
  params: {
    newsSlug: string;
  };
}

async function getNews({ newsSlug }: string) {
  const res = await client.getEntries({
    content_type: "news",
  });

  return res;
}

export default async function Home({ params }: Params) {
  const { newsSlug } = params;

  const data = await getNews(newsSlug);

  const filteredData = data.items.find((element) => {
    return element.fields.domainSlug === newsSlug;
  });

  // const data = await getNews(newsSlug);

  console.log(data);

  return (
    <div className="pt-24 bg-gray-50">
      <NewsBerichteDetails data={filteredData} />
    </div>
  );
}
