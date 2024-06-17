// @ts-nocheck

import EventOverview from "@/components/EventOverview/EventOverview";
import Footer from "@/components/Footer/Footer";
import HomeBreakComponent from "@/components/HomeBreakComponent/HomeBreakComponent";
import Impressum from "@/components/Impressum/Impressum";
import Navbar from "@/components/Navbar/Navbar";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 bg-gray-50">
        <Impressum />
      </div>
      <Footer />
    </main>
  );
}
