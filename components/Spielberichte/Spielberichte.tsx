"use client";

export default function Spielberichte({ data }: any) {
  console.log(data.items);

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.items.map(
            (item: any) =>
              item.fields.domainSlug && (
                <a
                  key={item.fields.domainSlug}
                  href={
                    item.sys.contentType.sys.id === "spielberichte"
                      ? `/verein/spielberichte/${item.fields.domainSlug}`
                      : `/verein/news/${item.fields.domainSlug}`
                  }
                  className="group flex flex-col items-start justify-between"
                >
                  <div className="relative w-full">
                    <img
                      src={
                        item.fields.image?.fields.file.url ||
                        "/images/volleyball.jpg"
                      }
                      alt=""
                      className="aspect-[16/9] w-full rounded-xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] group-hover:grayscale"
                    />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-4 flex items-center gap-x-4 text-xs">
                      <time dateTime="" className="text-gray-500">
                        {item.fields.date}
                      </time>
                      <div className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 group-hover:bg-gray-100">
                        {item.fields.author}
                      </div>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <div>
                          <span className="absolute inset-0" />
                          {item.fields.headline}
                        </div>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {item.fields.previewText}
                      </p>
                    </div>
                  </div>
                </a>
              )
          )}
        </div>
      </div>
    </div>
  );
}
