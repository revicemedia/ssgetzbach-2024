import EventPage from "@/components/EventsPage/EventPage";
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
  const data = await getTermine();

  // console.log(data)

  return (
    <div className="pt-24 bg-gray-50">
      <SubPageHeader
        headline="Termine"
        description="Alle vereinsinternen Termine auf einen Blick."
      />
      <EventPage data={data} />
    </div>
  );
}
