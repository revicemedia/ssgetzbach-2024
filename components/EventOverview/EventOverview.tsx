import Event from "./Event/Event";

const games = [
  {
    home: "/images/SSG_Etzbach.jpg",
    away: "/images/logo100.png",
    day: "20.07.2023",
    time: "17:30 Uhr",
    liga: "Bezirksliga Herren",
  },
  {
    home: "/images/logo100.png",
    away: "/images/SSG_Etzbach.jpg",
    day: "22.07.2023",
    time: "17:30 Uhr",
    liga: "Bezirksliga Herren",
  },
  {
    home: "/images/SSG_Etzbach.jpg",
    away: "/images/logo100.png",
    day: "23.07.2023",
    time: "17:30 Uhr",
    liga: "Bezirksliga Herren",
  },
];

export default function EventOverview({ data }: any) {
  const cleanData = data.items;

  return (
    <div className="bg-gray-50 mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
      <div className="mx-auto text-left">
        <h2 className="text-2xl font-regular text-gray-900 sm:text-2xl">
          Bevorstehende Spiele
        </h2>
      </div>
      <ul
        role="list"
        className="grid mt-8 max-w-7xl m-auto grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {cleanData.map((game: any) => (
          // <li
          //   key={game.day}
          //   className="col-span-1 divide-y rounded-xl divide-primary-delay/90 bg-white shadow overflow-hidden"
          // >
          //   <div className="bg-white">
          //     <div className="-mt-px flex">
          //       <div className="flex w-0 flex-1">
          //         <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-light text-gray-900">
          //           {game.liga}
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          //   <div className="flex w-full items-center justify-between space-x-6 px-12 lg:px-16 py-6">
          //     <img
          //       className="h14 w-14 flex-shrink-0 bg-white"
          //       src={game.home}
          //       alt="Heim"
          //     />
          //     <p className="text-gray-900">:</p>
          //     <img
          //       className="h14 w-14 flex-shrink-0 bg-white"
          //       src={game.away}
          //       alt="Auswärts"
          //     />
          //   </div>
          //   <div>
          //     <div className="-mt-px flex">
          //       <div className="flex w-0 flex-1">
          //         <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-light text-gray-900">
          //           {game.day}
          //         </div>
          //       </div>
          //       <div className="-ml-px flex w-0 flex-1">
          //         <div className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-light text-gray-900">
          //           {game.time}
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </li>
          <Event key="" game={game} />
        ))}
      </ul>
    </div>
  );
}
