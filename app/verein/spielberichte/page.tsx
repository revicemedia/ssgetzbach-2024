import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Spielberichte from "@/components/Spielberichte/Spielberichte";
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
          headline="Spielberichte"
          description="Alle Spielberichte im Überblick."
        />
        <Spielberichte />
      </div>
      <Footer />
    </main>
  );
}
