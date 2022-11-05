/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Spinner from "./common/Spinner";

  
  export default function BooksCard({books, heading}) {
    return (
        !books ? <>
        <Spinner></Spinner>
        </> : <>
        <div className="mx-auto py-12  max-w-2xl lg:max-w-7xl  bg-white dark:bg-slate-700">
        <h2 className="text-xl lg:text-2xl font-bold pb-10">{heading}</h2>
        <div className="grid gap-16 lg:gap-10 lg:grid-cols-5 mx-5 lg:mx-0">
        {books?.map((book) => (
          <Link href={`/books/${book.isbn13}`} key={book.title} className="flex flex-col overflow-hidden rounded-md bg-slate-200/50 dark:bg-slate-800 shadow-md cursor-pointer hover:-translate-y-1 hover:scale-90 transition duration-300 ease-in-out">
            <div className="h-50 overflow-hidden">
              <img className="h-50 w-50 object-fit  scale-[1.7] lg:scale-150" src={book.image} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div className="flex-1">
                <p className="text-sm lg:text-md font-bold text-indigo-600 dark:text-indigo-400">
                {book?.price === "$0.00" ? "Free" : book?.price}
                </p>
                <div className="mt-2 block">
                  <p className="text-xl font-semibold ">{book.title}</p>
                  {/* <p className="mt-3 text-base text-gray-500">{!book?.subtitle ? "Unknown Category" : book?.subtitle}</p> */}
                </div>
              </div>
              
            </div>
          </Link>
        ))}
        </div>
        
      </div>
        </>    )
  }
  