export default function HomeBreakComponent() {
  return (
    <div className="bg-none">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-darkbg px-6 py-24 text-center shadow-xl sm:rounded-xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Keine Neuigkeiten mehr verpassen
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Verpassen Sie keine Neuigkeiten mehr, indem Sie dem Verein auf
            Instagram folgen.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://www.instagram.com/ssgetzbach/"
              target="_blank"
              className="rounded-md bg-white px-3.5 py-2.5 text-base font-regular text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Zu Instagram
            </a>
            <a
              href="/verein/news"
              className="text-base font-regular leading-6 text-white"
            >
              Neuigkeiten <span aria-hidden="true">→</span>
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] opacity-60"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#fff238" />
                <stop offset={1} stopColor="#e9da35" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
