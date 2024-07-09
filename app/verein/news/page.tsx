import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import { client } from "@/contentful";

export interface Params {
  teamSlug: string;
}

async function getNews() {
  const res = await client.getEntries({ content_type: "news" });

  return res;
}

export default async function Home() {
  const data = await getNews();

  console.log(data);

  return (
    <div className="pt-24 bg-gray-50">
      <SubPageHeader
        headline="Neuigkeiten"
        description="Dies sind die wichtigsten Daten für unseren Verein."
      />
    </div>
  );
}
