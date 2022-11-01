/* eslint-disable @next/next/no-img-element */

import { data } from "autoprefixer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

 function DisplaySearch() {
    const [books, setBooks] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const router = useRouter()
    const bookName = router.query.id

    useEffect(()=> {
        fetch(`https://api.itbook.store/1.0/search/${bookName}/${pageNo}`)
        .then(res => res.json())
        .then(data => setBooks(data))
    },[pageNo])

    const remaining = pageNo === Math.ceil(books.total/10) ? books.total - ((pageNo -1)*10) : 10
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Total {books.total} books is found on {bookName.toUpperCase()}</h2>
        <button
        type="button"
        className="my-5 block lg:hidden mx-auto items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50"
      >
         Page: {pageNo} {"  |  "}Books:  {((pageNo -1)*10) + 1} to {((pageNo -1)*10) + remaining } out of {books.total}
      </button>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8">
          {books?.books?.map((book) => (
            <Link href={`/books/${book.isbn13}`} key={book.isbn13} className="cursor-pointer hover:-translate-y-1 hover:scale-90 transition duration-300 ease-in-out">
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900 overflow-hidden">{book.title}</h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{book.color}</p> */}
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">{book.price}</p>
                </div>
              </div>
              {/* <div className="mt-6">
                <Link
                  href={`/books/${book.isbn13}`}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to bag<span className="sr-only">, {book.name}</span>
                </Link>
              </div> */}
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
    </div>
  )
}



export default DisplaySearch;