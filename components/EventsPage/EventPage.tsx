import EventItem from "./EventItem/EventItem";

export default function EventPage({ data }: any) {
  const cleanData = data.items;

  return (
    <div className="bg-gray-50 mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
      <ul
        role="list"
        className="grid mt-8 max-w-7xl m-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {cleanData.map((game: any) => (
          <EventItem key="" Event={game} />
        ))}
      </ul>
    </div>
  );
}
