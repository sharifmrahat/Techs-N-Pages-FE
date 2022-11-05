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
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Combobox } from "@headlessui/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTheme } from "next-themes";
import useDarkMode from "../hooks/useDarkMode";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/images/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const books = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More users...
];
export default function Menubar() {
  const [colorTheme, setTheme] = useDarkMode();
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [data, setData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const router = useRouter();

  const filteredBook =
    query === ""
      ? books
      : books?.filter((book) => {
          return book?.title.toLowerCase().includes(query?.toLowerCase());
        });

  useEffect(() => {
    console.log(query);
    fetch(`https://api.itbook.store/1.0/search/${query}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data?.books);
        setData(data);
      });
  }, [query]);

  console.log(data);
  return (
    <Disclosure
      as="nav"
      className="bg-slate-300 dark:bg-gray-800 text-slate-800 dark:text-slate-300 transition-all duration-300 font-primary sticky top-0 z-10"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                  <Link
                    href="/"
                    className="flex flex-row justify-center items-center gap-4"
                  >
                    <Image
                      src={logo}
                      alt="techs-n-pages"
                      className="w-8 h-8 mb-1 block"
                    ></Image>{" "}
                    <h1 className="hidden lg:block text-md lg:text-2xl font-bold text-indigo-600 dark:text-indigo-400 font-heading">
                      Techs N Pages
                    </h1>
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link
                      href="/"
                      className={`block rounded-md ${
                        router.pathname === "/"
                          ? "bg-slate-800 dark:bg-slate-300  text-slate-100 dark:text-slate-800"
                          : ""
                      } px-3 py-2 text-base font-medium`}
                    >
                      Home
                    </Link>
                    <Link
                      href="/books"
                      className={`block rounded-md ${
                        router.pathname === "/books"
                          ? "bg-slate-800 dark:bg-slate-300  text-slate-100 dark:text-slate-800"
                          : ""
                      } px-3 py-2 text-base font-medium`}
                    >
                      Books
                    </Link>
                    <Link
                      href="/articles"
                      className={`block rounded-md ${
                        router.pathname === "/articles"
                          ? "bg-slate-800 dark:bg-slate-300  text-slate-100 dark:text-slate-800"
                          : ""
                      } px-3 py-2 text-base font-medium`}
                    >
                      Articles
                    </Link>
                    <Link
                      href="/contact"
                      className={`block rounded-md ${
                        router.pathname === "/contact"
                          ? "bg-slate-800 dark:bg-slate-300  text-slate-100 dark:text-slate-800"
                          : ""
                      } px-3 py-2 text-base font-medium`}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    {/* <input
                    onChange={handleSearch}
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-transparent bg-slate-100 dark:bg-gray-700 py-2 pl-10 pr-3 leading-5 text-slate-900 dark:text-white placeholder-gray-400  focus:outline-none sm:text-sm"
                      placeholder="Search"
                      type="search"
                    /> */}
                    <Combobox
                      as="div"
                      value={selectedBook}
                      onChange={setSelectedBook}
                    >
                      <div className="relative my-1">
                        <Combobox.Input
                          className="block w-full rounded-md border border-transparent bg-slate-100 dark:bg-gray-700 py-2 pl-10 pr-3 leading-5 text-slate-900 dark:text-white placeholder-gray-400  focus:outline-none sm:text-sm"
                          onChange={(event) => setQuery(event.target.value)}
                          displayValue={(book) => book?.title}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Combobox.Button>

                        {query && !books?.length ? (
                          <Combobox.Options className={`${!query ? 'hidden' : 'absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'}`}>
                            <p className="p-2 text-slate-800 block w-full">
                              No Books is Found about {query}
                            </p>
                          </Combobox.Options>
                        ) : (
                          <Combobox.Options className={`${!query ? 'hidden' : 'absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'}`}>
                            {filteredBook?.map((book) => (
                              <>
                                <Combobox.Option
                                  key={book?.isbn13}
                                  value={book}
                                  className={({ active }) =>
                                    classNames(
                                      "relative cursor-default select-none py-2 pl-3 pr-9",
                                      active
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-900"
                                    )
                                  }
                                >
                                  {({ active, selected }) => (
                                    <>
                                      <Link
                                        href={`/books/${book?.isbn13}`}
                                        className="flex items-center"
                                      >
                                        <img
                                          src={book?.image}
                                          alt=""
                                          className="h-6 w-6 flex-shrink-0 rounded-full"
                                        />
                                        <span
                                          className={classNames(
                                            "ml-3 truncate",
                                            selected && "font-semibold"
                                          )}
                                        >
                                          {book.title}
                                        </span>
                                      </Link>

                                      {selected && (
                                        <span
                                          className={classNames(
                                            "absolute inset-y-0 right-0 flex items-center pr-4",
                                            active
                                              ? "text-white"
                                              : "text-indigo-600"
                                          )}
                                        >
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      )}
                                    </>
                                  )}
                                </Combobox.Option>
                              </>
                            ))}
                            {
                             query && filteredBook &&  <Link
                             href={`/books/search/${query.toLowerCase()}`}
                             className="p-2 text-slate-800 hover:bg-indigo-600 hover:text-white font-semibold flex flex-row items-center gap-2 "
                           >
                            <MagnifyingGlassIcon className="w-4 h-4 mx-2"></MagnifyingGlassIcon>
                            <p>  Total <span className="font-bold">{data?.total}</span> books on {query?.length > 12 ? query.slice(0,12)+'...' : query}</p>
                            
                            <ArrowRightIcon className="w-4 h-4"></ArrowRightIcon>
                           </Link>
                            }
                          </Combobox.Options>
                        )}
                      </div>
                    </Combobox>
                  </div>
                </div>
              </div>
              <div className="px-3 block lg:hidden">
                {colorTheme === "light" ? (
                  <button
                    onClick={() => setTheme(colorTheme)}
                    className="block mx-auto"
                  >
                    {" "}
                    <SunIcon className="w-6 h-6  text-slate-800 dark:text-slate-300 dark:hover:text-slate-400 rounded-full transition-all duration-300"></SunIcon>
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme(colorTheme)}
                    className="block mx-auto"
                  >
                    {" "}
                    <MoonIcon className="w-6 h-6 text-slate-800 dark:text-slate-300 dark:hover:text-slate-400 rounded-full transition-all duration-300"></MoonIcon>
                  </button>
                )}
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                {/* <div className="flex items-center">
                  <button
                    type="button"
                    className="flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> */}
                {/* </div> */}
                {/* <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Login
      </button> */}
                {colorTheme === "light" ? (
                  <button
                    onClick={() => setTheme(colorTheme)}
                    className="block mx-auto"
                  >
                    {" "}
                    <SunIcon className="w-7 h-7 dark:text-slate-300 dark:hover:text-slate-400 rounded-full transition-all duration-300"></SunIcon>
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme(colorTheme)}
                    className="block mx-auto"
                  >
                    {" "}
                    <MoonIcon className="w-7 h-7 dark:text-slate-300 dark:hover:text-slate-400 rounded-full transition-all duration-300"></MoonIcon>
                  </button>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="/"
                className={`block rounded-md ${
                  router.pathname === "/"
                    ? "bg-slate-800 dark:bg-slate-300  text-slate-100 dark:text-slate-800"
                    : ""
                } px-3 py-2 text-base font-medium`}
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/books"
                className={`block rounded-md ${
                  router.pathname === "/books"
                    ? "bg-slate-800 dark:bg-slate-300  text-slate-100 dark:text-slate-800"
                    : ""
                } px-3 py-2 text-base font-medium`}
              >
                Books
              </Disclosure.Button>
              <Disclosure.Button
                as="Link"
                href="/articles"
                className={`block rounded-md ${
                  router.pathname === "/articles"
                    ? "bg-slate-800 dark:bg-slate-300  text-slate-100 dark:text-slate-800"
                    : ""
                } px-3 py-2 text-base font-medium`}
              >
                Articles
              </Disclosure.Button>
              <Disclosure.Button
                as="Link"
                href="/contact"
                className={`block rounded-md ${
                  router.pathname === "/contact"
                    ? "bg-slate-800 dark:bg-slate-300  text-slate-100 dark:text-slate-800"
                    : ""
                } px-3 py-2 text-base font-medium`}
              >
                Contact
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              {/* {
                loggedIn ? <>
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-400">tom@example.com</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Sign out
                </Disclosure.Button>
              </div>
                </> : <button>Login</button>
              } */}
              {/* <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Login
      </button> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
