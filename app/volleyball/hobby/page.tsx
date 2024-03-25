import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import TeamSection from "@/components/TeamSection/TeamSection";
import { client } from "@/contentful"

export interface Params {
  teamSlug: string;
}

async function getData() {
  const res = await client.getEntry("XlBbB1Bi1DKXS1ZJjBkbC")
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  return res
}

export default async function Home() {
  const data = await getData()

  console.log(data)

  return (
    <main>
      <Navbar />
      <div className="pt-24 bg-gray-50">
        <TeamSection data={data}/>
      </div>
      <Footer />
    </main>
  );
}
