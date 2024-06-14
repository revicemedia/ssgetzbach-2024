import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import {
  DevicePhoneMobileIcon,
  PhoneArrowDownLeftIcon,
  PhoneXMarkIcon,
} from "@heroicons/react/24/outline";

export default function Vorstand({ members }: any) {
  return (
    <div className="bg-gray-50 py-24 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {members.items.map((person: any) => (
            <li
              key={person.fields.name}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-xl bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <div className="mx-auto h-32 w-32  rounded-full overflow-hidden">
                  <img
                    className="object-cover min-h-full min-w-full"
                    src={person.fields.foto.fields.file.url}
                    alt=""
                  />
                </div>
                <h3 className="mt-6 text-md font-regular text-gray-900">
                  {person.fields.name}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dd className="text-sm text-gray-500">
                    {person.fields.aufgabe}
                  </dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  {person.fields.eMail && (
                    <div className="flex w-0 flex-1 hover:bg-gray-50/50">
                      <a
                        href={`mailto:${person.fields.eMail}`}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-2 rounded-bl-lg border border-transparent py-4 text-sm font-regular text-gray-900"
                      >
                        <EnvelopeIcon
                          className="h-5 w-5 text-gray-700"
                          aria-hidden="true"
                        />
                        E-Mail
                      </a>
                    </div>
                  )}
                  {person.fields.telefonnummer && (
                    <div className="-ml-px flex w-0 flex-1 hover:bg-gray-50/50">
                      <a
                        href={`tel:${person.fields.telefonnummer}`}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-2 rounded-br-lg border border-transparent py-4 text-sm font-regular text-gray-900"
                      >
                        <PhoneIcon
                          className="h-5 w-5 text-gray-700"
                          aria-hidden="true"
                        />
                        Telefon
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
