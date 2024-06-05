import Link from "next/link";

export default function NotFound() {
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
      <main className="grid min-h-full place-items-center px-6 py-32 sm:py-48 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-error">404</p>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl mt-4">
            Inhalt nicht verfügbar
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Diese Seite existiert leider nicht oder wurde entfernt.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-darkbg px-3.5 py-2.5 text-base font-regular text-white shadow-sm hover:bg-darkbg/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
