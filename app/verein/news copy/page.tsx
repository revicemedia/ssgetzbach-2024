import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import News from "@/components/News/News";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import { client } from "@/contentful";

export interface Params {
  teamSlug: string;
}

async function getNews() {
  const res = await client.getEntries({ content_type: "news" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res;
}

export default async function Home() {
  const data = await getNews();

  return (
    <main>
      <Navbar />
      <div className="pt-24 bg-gray-50">
        <SubPageHeader
          headline="Neuigkeiten"
          description="Dies sind die wichtigsten Daten für unseren Verein."
        />
        <News showHeadline={false} />
      </div>
      <Footer />
    </main>
  );
}
