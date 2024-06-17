import Downloads from "@/components/Downloads/Downloads";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import { client } from "@/contentful";

export interface Params {
  teamSlug: string;
}

async function getDownloads() {
  const res = await client.getEntries({ content_type: "downloads" });

  return res;
}

export default async function Home() {
  const data = await getDownloads();

  return (
    <div className="pt-24 bg-gray-50">
      <SubPageHeader
        headline="Downloads"
        description="Dies sind die zur Verfügung stehenden Downloads."
      />
      <Downloads data={data} />
    </div>
  );
}
