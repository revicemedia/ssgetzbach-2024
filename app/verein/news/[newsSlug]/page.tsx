import { client } from "@/contentful";

interface Params {
  params: {
    newsSlug: string;
  };
}

async function getNews() {
  const res = await client.getEntries({ content_type: "news" });

  return res;
}

export default async function Home({ params }: Params) {
  const data = await getNews();
  console.log(params);

  return (
    <div className="pt-24 bg-gray-50">
      <h2>Unterseite für News</h2>
      <p>{params.newsSlug}</p>
    </div>
  );
}
