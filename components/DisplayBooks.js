/* eslint-disable @next/next/no-img-element */

import Link from "next/link";


export default function DisplayBooks({books}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Newly Published Books</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {books.map((book) => (
            <Link href={`/books/${book.isbn13}`} key={book.isbn13} className="cursor-pointer hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out">
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900 overflow-hidden">{book.title.slice(0,40)}</h3>
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
      </div>
    </div>
  )
}


  
  // export default function DisplayBooks({books}) {
  //   return (
  //     <div className="bg-white">
  //       <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  //         <h2 id="products-heading" className="sr-only">
  //           Products
  //         </h2>
  
  //         <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
  //           {books.map((book) => (
  //             <Link key={book.isbn13} href={`/books/${book.isbn13}`} className="group">
  //               <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
  //                 <img
  //                   src={book.image}
  //                   alt={book.title}
  //                   className="h-full w-full object-cover object-center group-hover:opacity-75"
  //                 />
  //               </div>
  //               <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
  //                 <h3>{book.title}</h3>
  //                 <p>{book.price}</p>
  //               </div>
  //               {/* <p className="mt-1 text-sm italic text-gray-500">{book.description}</p> */}
  //             </Link>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  