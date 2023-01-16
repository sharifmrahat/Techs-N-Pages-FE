/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function ViewProfile({toggleEdit}) {
    const { user, loading } = useContext(AuthContext)
    return (
        <>
        <div className="m-5 lg:m-10 mx-auto lg:mx-auto w-max lg:w-1/2 bg-slate-200 dark:bg-slate-800  rounded-md shadow-md p-5 font-primary text-slate-900 dark:text-slate-200">
        <div>
                      <div className="space-y-6">
                        {/* <div className={`${!result?.error ? 'hidden' : 'block'}`}>
                          {
                            !result?.success && <Alert message={result?.error} />
                          }
                        </div> */}
                      <div className="flex justify-center">
                        {
                          user?.imageURL ? <>
                          <img className="inline-block h-16 w-16 overflow-hidden rounded-full" src={user?.imageURL} alt={user?.email} /></>  : <>
                          <span className="inline-block h-16 w-16 overflow-hidden rounded-full bg-slate-800 dark:bg-slate-300">
                                  <svg
                                    className="h-full w-full text-slate-300  dark:text-slate-800"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                  </svg>
                                </span>
                        </>
                        }
                      </div>
                      <div>
                          <input
                            disabled
                            type="text"
                            name="name"
                            id="name"
                            value={user.name}
                            placeholder="Enter your full name"
                            className="block w-full rounded-md  py-3 px-4 bg-slate-300 dark:bg-gray-700 shadow-sm focus:outline-none"
                          />
                        </div>
                        <div>
                          <input
                            disabled
                            type="email"
                            name="email"
                            id="email"
                            value={user.email}
                            placeholder="Enter your email"
                            className="block w-full rounded-md  py-3 px-4 bg-slate-300 dark:bg-gray-700 shadow-sm focus:outline-none"
                          />
                        </div>
                        <div>
                        <button
                        onClick={toggleEdit}
                            type="submit"
                            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 dark:bg-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
        </>
    );
}