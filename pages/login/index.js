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
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Alert from "../../components/common/Alert";
import Spinner from "../../components/common/Spinner";
import { AuthContext } from '../../context/AuthProvider'

export default function Login() {
    const { user, loading } = useContext(AuthContext)
    const [submit, setSubmit] = useState(false)
  const [result, setResult] = useState([]);

  const router = useRouter();

  const from = router.query.from || '/'

  const handleLogin = (e) => {
    e.preventDefault();
    setResult([]);
    setSubmit(true)

    const userInput = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const url = `https://techs-n-pages.onrender.com/api/v1/user/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setResult(data);
          if (data.token) {
            localStorage.setItem("accessToken", data?.token);
            router.push(from);
            setSubmit(false)
          }
        }
        if(data.error){
          setSubmit(false)
        }
      });
  };

  useEffect(() => {
    if (user) {
      router.push(from);
    }
  }, [user, router, from]);
  return (
    <>
      {(loading && !user) || loading || user ? (
        <>
         <Spinner></Spinner>
        </>
      ) : (
        <>
          <div className=" bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 font-primary">
                <div className="mx-auto max-w-7xl pt-10 lg:pt-20 pb-28">
                  <main>
                    <div className="mx-auto">
                      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="px-4 sm:px-6 sm:text-center lg:col-span-6 lg:flex lg:items-center lg:text-left">
                          <div>
                            <div className="inline-flex mx-auto items-center rounded-full bg-slate-200 dark:bg-slate-800 pr-2 sm:text-base xl:text-base">
                              <Link
                                href="/login"
                                className="rounded-full bg-indigo-600 dark:bg-indigo-500 px-4 py-1 text-md font-semibold leading-5 text-white"
                              >
                                Login
                              </Link>
                              <Link
                                href="/signup"
                                className="pl-4 text-md text-slate-800 dark:text-slate-100"
                              >
                                Sign Up
                              </Link>
                              <ChevronRightIcon
                                className="pl-2 h-5 w-5 text-gray-500"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="hidden lg:block">
                              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                Explore the techs as a bibliographer
                              </h1>
                              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Anim aute id magna aliqua ad ad non deserunt
                                sunt. Qui irure qui lorem cupidatat commodo.
                                Elit sunt amet fugiat veniam occaecat fugiat
                                aliqua ad ad non deserunt sunt.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10 lg:col-span-6 lg:mt-0 ml-auto">
                          <div className="bg-slate-200 dark:bg-slate-800 sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden rounded-md mx-5 lg:mx-0 shadow-md py-2">
                            <div className="p-5">
                              <div>
                                <form
                                  onSubmit={handleLogin}
                                  className="space-y-6"
                                >
                                  <div
                                    className={`${
                                      !result?.error ? "hidden" : "block"
                                    }`}
                                  >
                                    {!result?.success && (
                                      <Alert message={result?.error} />
                                    )}
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="first-name"
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
                                      htmlFor="first-name"
                                      className="block text-sm font-medium mb-1 text-slate-800 dark:text-slate-100"
                                    >
                                      Password
                                    </label>
                                    <input
                                      id="password"
                                      name="password"
                                      type="password"
                                      placeholder="User Password"
                                      className="block w-full rounded-md  py-3 px-4 bg-slate-300 dark:bg-gray-700 shadow-sm focus:outline-none"
                                    />
                                  </div>

                                  <div>
                                    {
                                      submit ? 
                                      <Spinner type="clip"></Spinner> 
                                      : 
                                      <button
                                      type="submit"
                                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 dark:bg-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                      Login
                                    </button>
                                    }
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
        </>
      )}
    </>
  );
}
