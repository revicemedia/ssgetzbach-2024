import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Timeline from "@/components/Timeline/Timeline";
import { client } from "@/contentful"

export interface Params {
  teamSlug: string;
}

async function getData() {
  const res = await client.getEntry("4QDqkr36ZEKwxcUUG2Tm90")
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  return res
}

export default async function Home() {
//   const data = await getData()


  return (
    <main>
      <Navbar />
      <div className="pt-24 bg-gray-50">
        <SubPageHeader headline="Vereinschronik" description="Dies sind die wichtigsten Daten für unseren Verein."/>
        <Timeline />
      </div>
      <Footer />
    </main>
  );
}
