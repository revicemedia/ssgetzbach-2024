import React from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";

export default function Download({ item }: any) {
  console.log(item);

  if (!item.fields.dokumentName || !item.fields.pdfDatei.fields.file.url) {
    return null;
  }

  return (
    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
      <div className="flex w-0 flex-1 items-center">
        <PaperClipIcon
          className="h-5 w-5 flex-shrink-0 text-gray-400"
          aria-hidden="true"
        />
        <div className="ml-4 flex min-w-0 flex-1 gap-2">
          <span className="truncate font-medium">
            {item.fields?.dokumentName}
          </span>
          <span className="flex-shrink-0 text-gray-400">
            {item.fields.stand}
          </span>
        </div>
      </div>
      <div className="ml-4 flex-shrink-0">
        <a
          href={item.fields.pdfDatei.fields.file.url}
          target="_blank"
          className="font-medium text-red-600 hover:text-red-900"
        >
          Download
        </a>
      </div>
    </li>
  );
}
