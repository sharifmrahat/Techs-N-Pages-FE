/* eslint-disable @next/next/no-img-element */
function Reviews() {
    const readers = [
        {_id: 1, name: 'Ibn Batuta', imageURL: "", createdAt: "17 January 2023", bookId: 123, review: "Testing review test"},
        {_id: 2, name: 'Abdullah', imageURL: "", createdAt: "15 January 2023", bookId: 124, review: "Not like this" },
      ]

      console.log(readers)
    return (
        <>
           <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl lg:text-2xl font-bold divide-red-400">
          Reviews
        </h2>
        <div className="mt-8 flex flex-col gap-4 justify-start items-center">
          {readers.map((reader) => {
            <div key={reader._id}>
              <div className="flex flex-row gap-4">
                {reader?.imageURL ? (
                  <img
                    src={reader.imageURL}
                    alt={reader._id}
                    className="inline-block w-8 h-8 rounded-full overflow-hidden"
                  />
                ) : (
                  <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-slate-800 dark:bg-slate-300">
                    <svg
                      className="h-full w-full text-slate-300  dark:text-slate-800"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                )}
                <div className="flex flex-col gap-2">
                  <p>{reader.name}</p>
                  <p>{reader.createdAt}</p>
                </div>
              </div>
              <div className="mt-5">
                <p>{reader.review}</p>
              </div>
            </div>;
          })}
        </div>
      </div>
        </>
    );
}


export default Reviews;