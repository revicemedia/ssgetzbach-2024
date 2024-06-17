// @ts-nocheck

import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Timeline from "@/components/Timeline/Timeline";
import { client } from "@/contentful";

export interface Params {
  teamSlug: string;
}

async function getVorstand() {
  // @ts-ignore
  const res = await client.getEntries({
    content_type: "vereinschronik",
    order: "-fields.jahr",
  });

  return res;
}

export default async function Home() {
  const data = await getVorstand();
  return (
    <div className="pt-24 bg-gray-50">
      <SubPageHeader
        headline="Vereinschronik"
        description="Dies sind die wichtigsten Daten für unseren Verein."
      />
      <Timeline data={data} />
    </div>
  );
}
