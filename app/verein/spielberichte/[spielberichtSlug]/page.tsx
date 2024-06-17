import { client } from "@/contentful";

export interface Params {
  teamSlug: string;
}

async function getSpielbericht() {
  const res = await client.getEntries({ content_type: "news" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res;
}

export default async function Home() {
  const data = await getSpielbericht();

  return (
    <div className="pt-24 bg-gray-50">
      <h2>Unterseite für Spielberichte</h2>
    </div>
  );
}
