import Downloads from "@/components/Downloads/Downloads";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Timeline from "@/components/Timeline/Timeline";
import { client } from "@/contentful"

export interface Params {
  teamSlug: string;
}

async function getDownloads() {
  // @ts-ignore
  const res = await client.getEntries({content_type: "vereinschronik", order: "-fields.jahr"})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  return res
}

export default async function Home() {
  // const data = await getVorstand();

  // console.log(data)


  return (
    <main>
      <Navbar />
      <div className="pt-24 bg-gray-50">
        <SubPageHeader headline="Downloads" description="Dies sind die wichtigsten Daten für unseren Verein."/>
        <Downloads />
      </div>
      <Footer />
    </main>
  );
}
