import React from "react";

function Event({ game }: any) {
  return (
    <li
      key=""
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-xl bg-white text-center shadow overflow-hidden"
    >
      <div className="flex flex-1 flex-row p-8 bg-white items-center justify-center gap-8 relative overflow-hidden">
        <div
          className="absolute inset-x-0 transform-gpu overflow-hidden blur-2xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffdf88] to-[#d0c30f] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center">
          <img
            className="h-12 w-auto sm:h-14 sm:w-auto flex-shrink-0"
            src={game.home}
            alt=""
          />
        </div>
        <p>:</p>
        <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center">
          <img
            className="h-12 w-auto sm:h-14 sm:w-auto flex-shrink-0"
            src={game.away}
            alt=""
          />
        </div>
      </div>
      <div className="pb-6">
        <h3 className="mt-6 text-sm font-medium text-gray-900">{game.liga}</h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dd className="text-sm text-gray-500">
            {game.day + " - " + game.time}
          </dd>
        </dl>
      </div>
    </li>
  );
}

export default Event;
