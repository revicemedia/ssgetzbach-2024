import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, Paragraph } from '@contentful/rich-text-types';

export default async function Timeline({data}: any) {

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return <p className='text-darkbg'>{children}</p>
      },
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        return <h2 className='text-red-600'>{children}</h2>
      },
    },
  };

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">
          <dl className=" space-y-6 divide-y divide-gray-900/10">
            {data.items.map((faq: any) => (
              <Disclosure as="div" key={faq.year} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-xl font-regular leading-7">{faq.fields.headline}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{documentToReactComponents(faq.fields.beschreibung, options)}</p>
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
