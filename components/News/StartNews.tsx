type NewsProps = {
  showHeadline: boolean;
  data: any;
};

type DataItem = {
  fields: {
    headline: string;
    date: string;
    author: string;
    text: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
};

export default function StartNews({ showHeadline, data }: any) {
  console.log(data);

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {showHeadline && (
          <div className="mx-auto text-left">
            <h2 className="text-2xl font-regular text-gray-900 sm:text-2xl">
              Neuigkeiten
            </h2>
          </div>
        )}
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((item: any) => (
            <a
              key={item.fields.domainSlug}
              href={
                item.sys.contentType.sys.id === "spielberichte"
                  ? `/verein/spielberichte/${item.fields.domainSlug}`
                  : `/verein/news/${item.fields.domainSlug}`
              }
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={
                    item.fields.image?.fields.file.url ||
                    "/images/volleyball.jpg"
                  }
                  alt=""
                  className="aspect-[16/9] w-full rounded-xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-4 flex items-center gap-x-4 text-xs">
                  <time dateTime="" className="text-gray-500">
                    {item.fields.date}
                  </time>
                  <div className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {item.fields.author}
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
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
          ))}
        </div>
      </div>
    </div>
  );
}
