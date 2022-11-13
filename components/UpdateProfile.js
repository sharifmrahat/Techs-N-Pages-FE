import useCurrentUser from "../hooks/useCurrentUser"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function UpdateProfile() {
    const [currentUser] = useCurrentUser()

    const handleUpdate = () => {
            console.log("updated")
    }
    return (
     <>
             <div className="m-5 lg:m-10 mx-auto lg:mx-auto w-max lg:w-1/2 bg-slate-200 dark:bg-slate-800  rounded-md shadow-md p-5 font-primary text-slate-900 dark:text-slate-200">
                    <div>
                      <form onSubmit={handleUpdate} className="space-y-6">
                        {/* <div className={`${!result?.error ? 'hidden' : 'block'}`}>
                          {
                            !result?.success && <Alert message={result?.error} />
                          }
                        </div> */}
                      <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-1 text-slate-800 dark:text-slate-300"
                          >
                            Name: 
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={currentUser?.data?.name}
                            placeholder="Enter your full name"
                            className="block w-full rounded-md  py-3 px-4 bg-slate-300 dark:bg-gray-700 shadow-sm focus:outline-none"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-1 text-slate-800 dark:text-slate-300"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={currentUser?.data?.email}
                            placeholder="Enter your email"
                            className="block w-full rounded-md  py-3 px-4 bg-slate-300 dark:bg-gray-700 shadow-sm focus:outline-none"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="current-password"
                            className="block text-sm font-medium mb-1 text-slate-800 dark:text-slate-100"
                          >
                           Current Password
                          </label>
                          <input
                            id="current-password"
                            name="currentPassword"
                            type="password"
                            placeholder="Current Password"
                            className="block w-full rounded-md  py-3 px-4 bg-slate-300 dark:bg-gray-700 shadow-sm focus:outline-none"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="new-password"
                            className="block text-sm font-medium mb-1 text-slate-800 dark:text-slate-100"
                          >
                           New Password
                          </label>
                          <input
                            id="new-password"
                            name="newPassword"
                            type="password"
                            placeholder="New Password"
                            className="block w-full rounded-md  py-3 px-4 bg-slate-300 dark:bg-gray-700 shadow-sm focus:outline-none"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="confirm-password"
                            className="block text-sm font-medium mb-1 text-slate-800 dark:text-slate-100"
                          >
                            Confirm New Password
                          </label>
                          <input
                            id="confirm-password"
                            name="confirmPassword"
                            type="password"
                            placeholder="Re-enter Password"
                            className="block w-full rounded-md  py-3 px-4 bg-slate-300 dark:bg-gray-700 shadow-sm focus:outline-none"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 dark:bg-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
     </>
    )
  }
  