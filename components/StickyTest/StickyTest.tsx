import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function StickyTest({ data }: any) {
  console.log(data);

  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-24 lg:overflow-visible lg:px-0 lg:max-w-7xl mx-auto">
      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-7xl mx-auto lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 overflow-hidden">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-red-600">
                Saison 2023 / 2024
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {data.fields.teamName}
              </h1>
              <div className="max-w-full text-base leading-7 text-gray-700 lg:max-w-full pt-4">
                <p>Auf dem Foto von links nach rechts:</p>
                <ul role="list" className="mt-4 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Hinten:
                      </strong>{" "}
                      Physio Manuela Semmelrogge, Jasmin Tjart (7), Olga Hombach
                      (9), Janina Gerhards (3), Veronika Schwarz (1), Jana
                      Birkhölzer (11), Anna Birkhölzer, Trainer Hans-Jürgen
                      Schröder
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Vorne:
                      </strong>{" "}
                      Rebecca Jung (2), Melissa Hess (6), Libera Katja Gerhards
                      (14), Jennifer Neufeld (13)
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Spielbereich:
                      </strong>{" "}
                      VVRP Rheinland-Pfalz-Liga Frauen | Staffel B
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-12 py-12 lg:px-8 lg:sticky lg:top-16 lg:col-start-2 lg:row-start-1 lg:overflow-hidden w-full">
          <div className="bg-white shadow-sm rounded-xl p-6">
            <h3 className="pb-4 text-base font-semibold leading-7 text-darkbg">
              Training:
            </h3>
            <ul role="list" className="grid grid-cols-1 gap-5 pb-8">
              {data.fields.trainingszeiten &&
                data.fields.trainingszeiten.map((training: any) => (
                  <li
                    key={training.fields.wochentag}
                    className="col-span-1 flex rounded-md shadow-sm"
                  >
                    <div className="bg-gray-600 flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white">
                      {training.fields.wochentag}
                    </div>
                    <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                      <div className="flex-1 truncate px-4 py-2 text-sm">
                        <div className="font-medium text-gray-900 hover:text-gray-600">
                          {training.fields.trainingsort}
                        </div>
                        <p className="text-gray-500">
                          {training.fields.startzeit +
                            " - " +
                            training.fields.endzeit}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            {data.fields.ansprechpartner && (
              <>
                <h3 className="pb-4 text-base font-semibold leading-7 text-darkbg">
                  Kontakt:
                </h3>
                <ul role="list" className="grid grid-cols-1 gap-6 pb-8">
                  <li
                    key={data.fields.ansprechpartner.fields.name}
                    className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                  >
                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                      <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                          <h3 className="truncate text-sm font-medium text-gray-900">
                            {data.fields.ansprechpartner.fields.name}
                          </h3>
                          <span className="inline-flex flex-shrink-0 items-center rounded-full bg-white px-1.5 py-0.5 text-xs font-medium text-red-600 ring-1 ring-inset ring-red-600/20">
                            {
                              data.fields.ansprechpartner.fields
                                .verantwortlichkeit
                            }
                          </span>
                        </div>
                        <p className="mt-1 truncate text-sm text-gray-500">
                          {data.fields.ansprechpartner.fields.lizenz}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="-mt-px flex divide-x divide-gray-200">
                        {data.fields.ansprechpartner.fields.eMail && (
                          <div className="flex w-0 flex-1">
                            <a
                              href={`mailto:${data.fields.ansprechpartner.fields.eMail}`}
                              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-regular text-gray-900"
                            >
                              <EnvelopeIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              E-Mail
                            </a>
                          </div>
                        )}
                        {data.fields.ansprechpartner.fields.telefon && (
                          <div className="-ml-px flex w-0 flex-1">
                            <a
                              href={`tel:${data.fields.ansprechpartner.fields.telefon}`}
                              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-regular text-gray-900"
                            >
                              <PhoneIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              Telefon
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                </ul>
              </>
            )}
            {(data.fields.tabelle || data.fields.spielplan) && (
              <>
                <h3 className="pb-4 text-base font-semibold leading-7 text-darkbg">
                  Quicklinks:
                </h3>
                <div className="w-full flex gap-4">
                  {data.fields.spielplan && (
                    <a
                      href={data.fields.spielplan}
                      className="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-regular text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Spielplan
                    </a>
                  )}
                  {data.fields.tabelle && (
                    <a
                      href={data.fields.tabelle}
                      className="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-regular text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Tabelle
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
