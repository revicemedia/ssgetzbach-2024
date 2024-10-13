import {
  InformationCircleIcon,
  UserCircleIcon,
  AtSymbolIcon,
  CloudIcon,
  LinkIcon,
  LockOpenIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Was sind Cookies?",
    description: [
      {
        id: 1,
        text: "Wir kennen „Cookies“ (dt. „Plätzchen“) vor allem als Datenpakete, die von Webbrowsern und Internetseiten erzeugt werden, um individuelle Nutzerdaten zu speichern. Ursprünglich waren sie unter dem Namen Magic Cookies bekannt: Der Begriff bezeichnet sämtliche generischen Datenpakete, die zwischen Computer-Applikationen ausgetauscht werden. Mit dem Internet kamen schließlich in Form von HTTP-Cookies jene Datenpakete hinzu, mithilfe derer Webanwendungen personenbezogene Daten sammeln, um beispielsweise Login-Daten, Surfverhalten, Einstellungen und Aktionen in Webapplikationen (wie den „Warenkörben“ in Onlineshops) zu speichern.",
        type: "Text",
      },
      {
        id: 2,
        text: "Grob zusammengefasst: Eine Website erkennt anhand des Cookies, wer sie gerade besucht, und kann sich dadurch in gewissem Rahmen an die Nutzerbedürfnisse anpassen. Die Datenspeicherung durch Cookies hat also durchaus einen spürbaren Effekt auf den User – zudem spielen Cookies inzwischen auch im Online-Marketing eine wichtige Rolle.",
        type: "Text",
      },
    ],
    icon: InformationCircleIcon,
  },
  {
    name: "Verwenden wir Cookies?",
    description: [
      {
        id: 1,
        text: "Wir verzichten ausdrücklich auf das Erheben & Speichern personenbezogener Daten & nutzen aus diesem Grund auch keine Cookies. Unser Hosting-Anbieter Vercel nutzt funktionelle Cookies, um die korrekte Anzeige der Webseite zu gewährleisten. Diese Cookies sind unbedingt erforderlich.",
        type: "Text",
      },
    ],
    icon: UserCircleIcon,
  },
  // {
  //   name: "Nutzt unser Hosting-Anbieter Cookies?",
  //   description: [
  //     {
  //       id: 1,
  //       text: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
  //       type: "Text",
  //     },
  //   ],
  //   icon: CloudIcon,
  // },
  {
    name: "Weitere Informationen zu Cookies",
    description: [
      {
        id: 1,
        text: "Weitere Informationen zu Cookies findest du unter:",
        type: "Text",
      },
      {
        id: 2,
        text: "https://www.ionos.de/digitalguide/hosting/hosting-technik/was-sind-cookies/",
        type: "Link",
      },
    ],
    icon: LinkIcon,
  },
];

export default function Cookies() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-left">
          <h2 className="text-2xl font-regular text-gray-900 sm:text-2xl">
            Cookies
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-red-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 self-start">
                  {feature.description.map((item) =>
                    item.type === "Link" ? (
                      <a href={item.text} className="text-error" key={item.id}>
                        {item.text}
                      </a>
                    ) : (
                      <p className="flex-auto" key={item.id}>
                        {item.text}
                      </p>
                    )
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
