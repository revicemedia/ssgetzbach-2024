import Spielberichte from "@/components/Spielberichte/Spielberichte";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import { client } from "@/contentful";

export interface Params {
  spielberichtSlug: string;
}

async function getSpielberichte() {
  const res = await client.getEntries({ content_type: "news" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res;
}

export default async function Home() {
  const data = await getSpielberichte();

  return (
    <div className="pt-24 bg-gray-50">
      <SubPageHeader
        headline="Spielberichte"
        description="Alle Spielberichte im Überblick."
      />
      <Spielberichte />
    </div>
  );
}
