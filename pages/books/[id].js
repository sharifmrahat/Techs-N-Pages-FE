/* eslint-disable @next/next/no-typos */
/* eslint-disable @next/next/no-img-element */
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from "react";
import {
  CheckIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import {
  PencilSquareIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



function BookDetails({ data }) {
  const readers = [
    {_id: 1, name: 'Ibn Batuta', imageURL: "", createdAt: "17 January 2023", bookId: 123, review: "Testing review test", rating: 4},
    {_id: 2, name: 'Abdullah', imageURL: "", createdAt: "15 January 2023", bookId: 124, review: "Not like this", rating: 2},
  ]
  console.log(readers)
  return (
    <div className="bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 px-5 lg:px-0 font-primary pb-48 lg:pt-6">
      <div className="mx-auto max-w-2xl lg:max-w-7xl flex flex-col-reverse lg:flex-row justify-evenly">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {data.title}
            </h1>
          </div>

          <section
            aria-labelledby="information-heading"
            className="my-4 text-slate-600 dark:text-slate-400"
          >
            <h2 id="information-heading" className="">
              Author: {data.authors}
            </h2>
            <h2 id="information-heading" className="">
              Publisher: {data.publisher} | Year: {data.year}
            </h2>
            <h2 id="information-heading" className="">
              Pages: {data.pages}
            </h2>

            <div className="flex items-center mt-4">
              <p className="text-lg  sm:text-xl">{data.price}</p>

              <div className="ml-4 border-l border-gray-300 pl-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            data.rating > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{data.rating} out of 5 stars</p>
                  </div>
                  {/* <p className="ml-2 text-sm text-gray-500 dark:text-slate-400">{data.rating} reviews</p> */}
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500 dark:text-slate-400">
                {data.desc}
              </p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon
                className="h-5 w-5 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500 dark:text-slate-400">
                In stock and ready to ship
              </p>
            </div>
          </section>
          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" className="sr-only">
                Product options
              </h2>
              <div className="mt-10 flex flex-col-reverse lg:flex-row gap-5">
                <button
                  type="submit"
                  className="flex w-full lg:w-fit items-center justify-center rounded-md border border-transparent bg-indigo-600 dark:bg-indigo-40s0 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 dark:hover:bg-indigo-500 focus:outline-none"
                >
                  <div className="flex flex-row justify-center gap-8">
                    <p>Add To Bag</p>{" "}
                    <ShoppingBagIcon className="w-6 h-6 inline-block"></ShoppingBagIcon>
                  </div>
                </button>
                <button
                  type="submit"
                  className="flex w-full lg:w-fit items-center justify-center rounded-md border border-transparent bg-slate-300 dark:bg-slate-800 py-3 px-8 text-base font-medium text-slate-800 dark:text-slate-300 hover:bg-slate-400 dark:hover:bg-slate-900 focus:outline-none"
                >
                  <div className="flex flex-row justify-center gap-8">
                    <p>Write a Review</p>{" "}
                    <PencilSquareIcon className="w-6 h-6 inline-block"></PencilSquareIcon>
                  </div>
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
            <img
              src={data.image}
              alt={data.title}
              className="h-full w-full lg:h-[500px]"
            />
          </div>
        </div>

        {/* Product form */}
      </div>

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl lg:text-2xl font-bold divide-y divide-gray-300 dark:divide-gray-600 border-b-2 border-b-slate-500 dark:border-b-slate-300  pb-2">
          Reviews & Ratings
        </h2>
        <div className="mt-5 flex flex-col gap-10 justify-start item-start">
          {readers?.map((reader) => <>
            <div key={reader._id} className="py-4 px-2 border-b border-b-slate-300 dark:border-b-slate-600">
              <div className="flex flex-row justify-start items-start gap-4">
                {reader?.imageURL ? (
                  <img
                    src={reader.imageURL}
                    alt={reader._id}
                    className="inline-block w-10 h-10 rounded-full overflow-hidden"
                  />
                ) : (
                  <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-slate-800 dark:bg-slate-300">
                    <svg
                      className="h-full w-full text-slate-300  dark:text-slate-800"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                )}
                <div className="flex flex-col gap-1">
                  <p className="font-bold">{reader.name}</p>
                  
                  <p className="text-slate-500 text-sm">{reader.createdAt}</p>

                  <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reader.rating > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reader.rating} out of 5 stars</p>
                </div>
              </div>
              <div className="mt-5">
                <p>{reader.review}</p>
                
              </div>
            </div>
          </> )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const res = await fetch(`https://api.itbook.store/1.0/books/${params?.id}`);
  const data = await res.json();
 
  return {
    props: {
      data: data,
    },
  };
}
// export async function getStaticPaths() {
//     const res = await fetch("https://api.itbook.store/1.0/new")
//     const data = await res.json()
//     const paths = data.books.map(book => {
//         return {
//             params: {id: book.isbn13}
//         }
//     })
//     return {
//       paths: paths,
//       fallback: false, // can also be true or 'blocking'
//     }
//   }

export default BookDetails;
