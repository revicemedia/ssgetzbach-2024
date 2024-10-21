import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  InformationCircleIcon,
  UserCircleIcon,
  AtSymbolIcon,
  LinkIcon,
  LockOpenIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Angaben gemäß § 5 TMG",
    description: [
      {
        id: 1,
        text: "Spiel- und Sportgemeinschaft Etzbach e.V.",
        type: "Text",
      },
      { id: 2, text: "Drosselweg 9", type: "Text" },
      { id: 3, text: "57539 Etzbach", type: "Text" },
      { id: 4, text: "Vereinsregister: VR10252", type: "Text" },
      { id: 5, text: "Registergericht: Amtsgericht Montabaur", type: "Text" },
    ],
    icon: InformationCircleIcon,
  },
  {
    name: "Kontakt",
    description: [
      { id: 1, text: "E-Mail:", type: "Text" },
      { id: 1, text: "ssg-etzbach@web.de", type: "Mail" },
      {
        id: 3,
        text: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        type: "Text",
      },
    ],
    icon: AtSymbolIcon,
  },
  {
    name: "Vertreten durch den Vorstand:",
    description: [
      { id: 1, text: "Julian Schröder", type: "Text" },
      { id: 2, text: "Janina Pattberg", type: "Text" },
      { id: 3, text: "Melissa Hess", type: "Text" },
      { id: 4, text: "Rolf Grün", type: "Text" },
    ],
    icon: UserCircleIcon,
  },
  {
    name: "Haftung für Inhalte",
    description: [
      {
        id: 1,
        text: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
        type: "Text",
      },
    ],
    icon: LinkIcon,
  },
  {
    name: "Haftung für Links",
    description: [
      {
        id: 1,
        text: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
        type: "Text",
      },
    ],
    icon: LinkIcon,
  },
  {
    name: "Urheberrecht",
    description: [
      {
        id: 1,
        text: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
        type: "Text",
      },
      {
        id: 2,
        text: "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
        type: "Text",
      },
    ],
    icon: LockOpenIcon,
  },
];

export default function Impressum() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-left">
          <h2 className="text-2xl font-regular text-gray-900 sm:text-2xl">
            Impressum
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
                  {feature.description.map((item) => (
                    <p className="flex-auto" key={item.id}>
                      {item.text}
                    </p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
