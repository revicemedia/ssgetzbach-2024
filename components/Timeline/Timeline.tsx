"use client"
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export default function Timeline({data}: any) {

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return <p className='text-darkbg pb-4 font-light'>{children}</p>
      },
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
        return <li className='text-darkbg pb-2 list-disc ml-4'>{children}</li>
      },
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        return <h2 className='text-red-600 pb-4 font-semibold text-lg'>{children}</h2>
      },
      [BLOCKS.QUOTE]: (node: any, children: any) => {
        return <p className='text-red-600 pb-4'>{children}</p>
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
        return <img src={node.data.target.fields.file.url} className='w-full h-auto rounded-xl mb-6'/>
      },
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        console.log(node)
        return <a href={node.data.uri} target="_blank" className='w-full h-auto rounded-xl mb-6 text-red-600 hover:text-red-700 cursor-pointer hover:underline'>{children}</a>
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
                        <span className="text-lg lg:text-xl font-regular leading-7">{faq.fields.headline}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2">
                      <div className="text-base leading-7 text-gray-600 p-4 max-w-2xl">{documentToReactComponents(faq.fields.beschreibung, options)}</div>
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
