"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { redirect } from "next/navigation";

export default async function NewsBerichteDetails({ data }: any) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return <p className="text-darkbg pb-4 font-light">{children}</p>;
      },
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
        return <li className="text-darkbg pb-2 list-disc ml-4">{children}</li>;
      },
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        return (
          <h2 className="text-red-600 pb-4 font-semibold text-lg">
            {children}
          </h2>
        );
      },
      [BLOCKS.QUOTE]: (node: any, children: any) => {
        return <p className="text-red-600 pb-4">{children}</p>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
        return (
          <img
            src={node.data.target.fields.file.url}
            className="w-full h-auto rounded-xl mb-6"
          />
        );
      },
      [INLINES.HYPERLINK]: (node: any, children: any) => {
        console.log(node);
        return (
          <a
            href={node.data.uri}
            target="_blank"
            className="w-full h-auto rounded-xl mb-6 text-red-600 hover:text-red-700 cursor-pointer hover:underline"
          >
            {children}
          </a>
        );
      },
    },
  };

  if (!data) {
    redirect("/notfound");
  }

  console.log(data);

  return (
    <div className="px-6 py-20 lg:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-red-600 font-regular text-md">{data.fields.date}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-normal text-gray-900 sm:text-4xl">
          {data.fields.headline}
        </h1>
        <img
          alt={data.fields.headline}
          src={
            (data.fields.image && data.fields.image.fields.file.url) ||
            "/images/volleyball.jpg"
          }
          className="aspect-video w-full rounded-xl bg-gray-50 object-cover mt-12"
        />
        {data.fields.inhalt ? (
          <div className="mt-8 lg:mt-12 lg:px-4">
            {documentToReactComponents(data.fields.inhalt, options)}
          </div>
        ) : (
          <div className="mt-8 lg:mt-12 lg:px-4">
            <p className="text-darkbg pb-4 font-light">{data.fields.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}
