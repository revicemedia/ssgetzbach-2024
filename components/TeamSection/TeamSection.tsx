"use client"

import StickyTest from '../StickyTest/StickyTest'

export default function TeamSection({data}: any) {

  console.log(data)

  return (
    <div className="">
      <figure className="overflow-hidden aspect-4/3 lg:aspect-16/6">
          <img
            className="bg-gray-50 object-cover object-top w-full h-full"
            src={data.fields.teamImage.fields.file.url}
            alt="Mannschaftsfoto"
          />
        </figure>
        <StickyTest data={data}/>
      </div>
  )
}
