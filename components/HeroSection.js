/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import heroImage from '../images/Books.png'

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 mx-auto max-w-7xl">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white dark:bg-slate-700 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Books to enrich your</span>{' '}
                <span className="block text-indigo-600 dark:text-indigo-400 xl:inline">Tech knowledge</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/books"
                    className="flex w-full items-center justify-center rounded-md border border-transparent text-slate-100 bg-indigo-600 px-8 py-3 text-base font-medium hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/books"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Live demo
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="pt-5 lg:pt-0 mx-auto max-w-7xl">
        <Image
          className="py-5 w-full object-cover lg:w-[370px]"
          src={heroImage}
          alt="heroImage"
        />
      </div>
    </div>
  )
}
