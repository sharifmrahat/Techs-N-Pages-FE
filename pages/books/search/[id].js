/* eslint-disable @next/next/no-img-element */

import { data } from "autoprefixer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Alert from "../../../components/common/Alert";
import Spinner from "../../../components/common/Spinner";

 function DisplaySearch() {
    const [books, setBooks] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const router = useRouter()
    const bookName = router.query.id

    useEffect(()=> {
        fetch(`https://api.itbook.store/1.0/search/${bookName}/${pageNo}`)
        .then(res => res.json())
        .then(data => setBooks(data))
    },[pageNo, bookName])

    console.log(books)
    const remaining = pageNo === Math.ceil(books.total/10) ? books.total - ((pageNo -1)*10) : 10
  return (
    <div className="bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200">
     {
      !books?.books?.length ? <>
      {
        books?.total === '0' ? <><div  className="mx-auto max-w-2xl py-28 px-6 lg:max-w-7xl ">
        <Alert message={`No books is found about: ${bookName?.length > 25 ? bookName.slice(0,25)+'...' : bookName}`}></Alert>
        </div></> : <>
        <div className="mx-auto max-w-2xl py-28 px-6 lg:max-w-7xl ">
        <Spinner></Spinner>
        </div>
      
        </>
      }
      </> : <>
       <div className="mx-auto max-w-2xl py-12 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-8 text-xl font-bold">Total {books?.total} books is found on {bookName?.length > 25 ? bookName.slice(0,25)+'...' : bookName}</h2>
        <button
        type="button"
        className="my-5 block lg:hidden mx-auto items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50"
      >
         Page: {pageNo} {"  |  "}Books:  {((pageNo -1)*10) + 1} to {((pageNo -1)*10) + remaining } out of {books?.total}
      </button>
      <div className="grid gap-16 lg:gap-10 lg:grid-cols-5 mx-5 lg:mx-0">
        {books.books?.map((book) => (
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
        <div className="flex flex-1 justify-between my-10 items-center">
          <button
          disabled={pageNo === 1}
          onClick={()=> pageNo === 1 ? setBooks(1) : setPageNo(pageNo-1)}
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Previous
          </button>
          <button
        type="button"
        className="hidden lg:inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50"
      >
         Page: {pageNo} {"  |  "}Books:  {((pageNo -1)*10) + 1} to {((pageNo -1)*10) + remaining } out of {books.total}
      </button>
          <button
          disabled={pageNo === Math.ceil(books.total/10)}
           onClick={() => pageNo === Math.ceil(books.total/10) ? setPageNo(Math.ceil(books.total/10)) : setPageNo(pageNo+1)}
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </div>
      </>
     }
    </div>
  )
}



export default DisplaySearch;