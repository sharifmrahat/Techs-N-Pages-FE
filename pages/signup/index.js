/* eslint-disable @next/next/no-img-element */
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
import { Fragment, useEffect, useState } from "react";
import {
  Bars3Icon,
  ChevronLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Alert from "../../components/common/Alert";
import { useRouter } from "next/router";
import useCurrentUser from "../../hooks/useCurrentUser";

export default function Signup() {
  const [result, setResult] = useState([])
  const [currentUser] = useCurrentUser()
  
  const router = useRouter()

  const handleSignup = (e) => {
    e.preventDefault()

     const userInput = 
    {
      name : e.target.name.value,
      email : e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value
  }

  const url = `https://techs-n-pages.onrender.com/api/v1/user/signup`
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userInput)
    })
    .then(res => res.json())
    .then(data => setResult(data))
  }

useEffect(()=> {
  if(result?.success || currentUser.data){
    router.push('/')
  }
}, [result, currentUser, router])

  return (
    <div className=" bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 font-primary">
      <div className="mx-auto max-w-7xl pt-10 lg:pt-20 pb-28">
        <main>
          <div className="mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div>
                  <div className="inline-flex mx-auto items-center rounded-full bg-slate-200 dark:bg-slate-800 pl-2 sm:text-base xl:text-base">
                    <ChevronLeftIcon
                      className="pr-2 h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                    <Link
                      href="/login"
                      className="pr-4 text-md text-slate-800 dark:text-slate-100"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="rounded-full bg-indigo-600 dark:bg-indigo-500 px-4 py-1 text-md font-semibold leading-5 text-white"
                    >
                      Sign Up
                    </Link>
                  </div>
                  <div className="hidden lg:block">
                    <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                      Join in the world of bibliophile
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:col-span-6 lg:mt-0 ml-auto">
                <div className="bg-slate-200 dark:bg-slate-800 sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden rounded-md mx-5 lg:mx-0 shadow-md py-2">
                  <div className="p-5">
                    <div>
                      <form onSubmit={handleSignup} className="space-y-6">
                        <div className={`${!result?.error ? 'hidden' : 'block'}`}>
                          {
                            !result?.success && <Alert message={result?.error} />
                          }
                        </div>
                      <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-1 text-slate-800 dark:text-slate-300"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
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
                            placeholder="Enter your email"
                            className="block w-full rounded-md  py-3 px-4 bg-slate-300 dark:bg-gray-700 shadow-sm focus:outline-none"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium mb-1 text-slate-800 dark:text-slate-100"
                          >
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
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
                            Confirm Password
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
                            Sign Up
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-300 dark:border-gray-700 bg-slate-200 dark:bg-slate-800 p-5">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{" "}
                      <a
                        href="#"
                        className="font-medium text-gray-900 dark:text-slate-100 hover:underline"
                      >
                        Terms
                      </a>
                      ,{" "}
                      <a
                        href="#"
                        className="font-medium text-gray-900 dark:text-slate-100 hover:underline"
                      >
                        Data Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="font-medium text-gray-900 dark:text-slate-100 hover:underline"
                      >
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
