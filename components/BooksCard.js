/* eslint-disable @next/next/no-img-element */

// books card is for some pages

import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Spinner from "./common/Spinner";

  
export default function BooksCard({books, heading}) {
  const router = useRouter()
  const bookDetails = (bookId) => {
    router.push(`/books/${bookId}`)
  }
    return (
        !books ? <>
        <Spinner></Spinner>
        </> : <>
        <div className="mx-auto py-12  max-w-2xl lg:max-w-7xl  bg-white dark:bg-slate-700">
        <h2 className="text-xl lg:text-2xl font-bold pb-10">{heading}</h2>
        <div className="grid gap-20 lg:gap-16 md:grid-cols-2 lg:grid-cols-5 mx-5 lg:mx-0">
        {books?.map((book) => (
          <div key={book.title} className="flex flex-col overflow-hidden rounded-md bg-slate-200/50 dark:bg-slate-800 shadow-md cursor-pointer hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out">
            <div onClick={()=>bookDetails(book.isbn13)} className="h-50 overflow-hidden">
              <img className="h-50 w-50 object-fit scale-[1.7] lg:scale-150" src={book.image} alt="" />
            </div>
            <div onClick={()=>bookDetails(book.isbn13)} className="flex flex-1 flex-col justify-between p-6">
              <div className="flex-1">
                <p className="text-sm lg:text-md font-bold text-indigo-600 dark:text-indigo-400">
                {book?.price === "$0.00" ? "Free" : book?.price}
                </p>
                <div className="mt-2 block">
                  <p className="text-xl font-semibold ">{book.title.length > 24 ? book.title.slice(0, 24) + "..." : book.title }</p>
                  {/* <p className="mt-3 text-base text-gray-500">{!book?.subtitle ? "Unknown Category" : book?.subtitle}</p> */}
                </div>
              </div>
             
            </div>
            <div className="py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-slate-100 dark:text-white hover:font-bold">
              <div className="flex flex-row justify-center gap-4 items-center"> 
                <p className="text-md">Add To Bag</p> 
                <ShoppingBagIcon className="w-5 h-5 inline-block"></ShoppingBagIcon>
              </div>
              </div>
          </div>
        ))}
        </div>
        
      </div>
        </>    )
  }
  