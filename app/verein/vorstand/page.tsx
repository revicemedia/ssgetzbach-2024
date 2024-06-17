//@ts-nocheck

import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Vorstand from "@/components/Vorstand/Vorstand";
import { client } from "@/contentful";

export interface Params {
  teamSlug: string;
}

async function getData() {
  // @ts-ignore
  const res = await client.getEntries({
    content_type: "vorstand",
    order: "fields.positionierung",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res;
}

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <div className="pt-24 bg-gray-50">
      <SubPageHeader
        headline="Vereinsvorstand"
        description="Diesem Bereich entnehmen Sie unsere Vorstandsmitglieder und deren Kontaktinformationen."
      />
      <Vorstand members={data} />
    </div>
  );
}
