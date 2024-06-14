import Download from "./Download/Download";

export default function Downloads({ data }: any) {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="sm:col-span-2 sm:px-0">
            <dd className="text-sm text-gray-900">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                {data.items.map((item: any) => (
                  <Download
                    item={item}
                    key={item.fields?.dokumentName || Math.random()}
                  />
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
