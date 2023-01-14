import Link from "next/link";
import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter()

  const path = router.pathname
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <div className="bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 px-4 sm:px-6 md:grid md:place-items-center lg:px-8 pb-96 pt-28 transition-all duration-500">
          <div className="mx-auto max-w-max">
            <main className="sm:flex">
              <p className="text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400 sm:text-5xl">404</p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-bold tracking-tight  sm:text-5xl">Page not found</h1>
                  <p className="mt-1 text-base text-gray-500 dark:text-greay-300">
                    Sorry! route `{path}` is not found. <br /> This page might be private or not available in our system. <br /> Please check the URL in the address bar and try again.</p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <Link
                    href="/"
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 dark:bg-indigo-400 px-4 py-2 text-sm font-medium  shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-500 text-white dark:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Go back home
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Contact support
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    )
  }
  