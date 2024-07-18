// @ts-nocheck

import NewsBerichteDetails from "@/components/NewsBerichteDetails/NewsBerichteDetails";
import { client } from "@/contentful";

interface Params {
  params: {
    spielberichtSlug: string;
  };
}

async function getSpielberichte({ newsSlug }: string) {
  const res = await client.getEntries({
    content_type: "spielberichte",
  });

  return res;
}

export default async function Home({ params }: Params) {
  const { spielberichtSlug } = params;

  console.log(spielberichtSlug);

  const data = await getSpielberichte(spielberichtSlug);

  const filteredData = data.items.find((element) => {
    return element.fields.domainSlug === spielberichtSlug;
  });

  return (
    <div className="pt-24 bg-gray-50">
      <NewsBerichteDetails data={filteredData} />
    </div>
  );
}
