import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import { client } from "@/contentful";

export interface Params {
  teamSlug: string;
}

async function getTermine() {
  const res = await client.getEntries({ content_type: "termine" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res;
}

export default async function Home() {
  // const data = await getVorstand();

  // console.log(data)

  return (
    <div className="pt-24 bg-gray-50">
      <SubPageHeader
        headline="Termine"
        description="Alle Vereinsinternen Termine auf einen Blick."
      />
    </div>
  );
}
