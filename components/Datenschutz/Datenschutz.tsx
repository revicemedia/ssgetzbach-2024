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
    name: "Allgemeine Angaben",
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
    name: "Vertreten durch den Vorstand:",
    description: [
      { id: 1, text: "Julian Schröder", type: "Text" },
      { id: 2, text: "Janina Pattberg", type: "Text" },
      { id: 3, text: "Melissa Hess", type: "Text" },
      { id: 4, text: "Rolf Grün", type: "Text" },
    ],
    icon: InformationCircleIcon,
  },
  {
    name: "Datenerhebung",
    description: [
      { id: 1, text: "Wir erheben keine personenbezogenen Daten. Der Server (Vercel) speichert standardgemäß Daten wie IP-Adresse, Land und Dauer des Besuches. Diese Daten werden durch uns nicht erhoben, ausgelesen oder verarbeitet. Sie dienen lediglich der Sicherheit und werden selbstverständlich nicht verbreitet.", type: "Text" },
    ],
    icon: InformationCircleIcon,
  },
];

export default function Datenschutz() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-left">
          <h2 className="text-2xl font-regular text-gray-900 sm:text-2xl">
            Datenschutz
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
