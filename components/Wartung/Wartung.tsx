import React from "react";
import Image from "next/image";

export default function Wartung() {
  return (
    <div className="w-screen h-dvh bg-darkbg">
      <div className="max-w-3xl mx-auto px-6 h-dvh flex flex-col justify-center items-center gap-8">
        <div>
          <Image
            className="h-24 w-auto"
            src="/images/SSG_Etzbach.png"
            alt="Vereinslogo"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-white font-semibold text-4xl text-center max-w-lg">
          Wir arbeiten gerade an einer neuen Webseite
        </h1>
        <p className="text-white font-light text-center">
          In wenigen Tagen werden wir Ihnen diese neue Seite präsentieren.
        </p>
      </div>
    </div>
  );
}
