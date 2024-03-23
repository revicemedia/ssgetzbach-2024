"use client"

import { Disclosure } from '@headlessui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'

const years = [
  {
    year: "1921",
    entries: [
      {
        date: "19.06.1921",
        paragraph: "Test"
      }
    ]
  },
  {
    year: "1921",
    entries: [
      {
        date: "19.06.1921",
        paragraph: "Test"
      }
    ]
  },
]

export default function Timeline() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Vereinschronik</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {years.map((faq) => (
              <Disclosure as="div" key={faq.year} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.year}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <ArrowUpIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <ArrowDownIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.entries[0].paragraph}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
