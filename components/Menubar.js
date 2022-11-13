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
  ArrowRightIcon,
  ArrowRightOnRectangleIcon,
  CheckIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  ViewColumnsIcon,
  ShoppingBagIcon,
  StarIcon,
  Cog8ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import useDarkMode from "../hooks/useDarkMode";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../images/logo.png";
import useCurrentUser from "../hooks/useCurrentUser";

const menuLink = [
  {id: 1, name: 'Home', link: '/'},
  {id: 2, name: 'Books', link: '/books'},
  {id: 3, name: 'Articles', link: '/articles'},
  {id: 4, name: 'Contact', link: '/contact'}
]

const userLink = [
  {id: 1, name: 'Dashboard', link: '/dashboard', icon: <ViewColumnsIcon className="w-5 h-5 mr-2"></ViewColumnsIcon>},
  {id: 2, name: 'My Bag', link: '/dashboard/bag', icon: <ShoppingBagIcon className="w-5 h-5 mr-2"></ShoppingBagIcon>},
  {id: 3, name: 'Reviews', link: '/dashboard/reviews', icon: <StarIcon className="w-5 h-5 mr-2"></StarIcon>},
  {id: 4, name: 'Profile', link: '/dashboard/profile', icon: <UserCircleIcon className="w-5 h-5 mr-2"></UserCircleIcon>},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Menubar() {
  const [currentUser, setCurrentUser] = useCurrentUser()
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
    fetch(`https://api.itbook.store/1.0/search/${query}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data?.books);
        setData(data);
      });
  }, [query]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    setCurrentUser({success: false})
  }



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
                  <Link
                    href="/"
                    className="flex flex-row justify-center items-center gap-2"
                  >
                    <Image
                      src={logo}
                      alt="techs-n-pages"
                      className="w-10 block"
                    ></Image>{" "}
                    <h1 className="text-[18px] lg:text-2xl font-bold text-[#6a65d0] dark:text-[#7c76f1] font-heading">
                      Techs N Pages
                    </h1>
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {
                      menuLink?.map(menu => 
                        
                        <Link
                      key={menu.id}
                      href={menu.link}
                      className={`block py-1 px-3 border-2 border-transparent hover:border-indigo-600 dark:hover:border-indigo-500 rounded text-base${
                        router.pathname === menu.link
                          && " border-transparent bg-indigo-600 dark:bg-indigo-500 text-slate-100 dark:text-slate-50 font-bold"
                      } `}
                    >
                      {menu.name}
                    </Link>
                      )
                    }
                   
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <Combobox
                      as="div"
                      value={selectedBook}
                      onChange={setSelectedBook}
                    >
                      <div className="relative my-1">
                        <Combobox.Input
                          placeholder="Search Books"
                          className="block w-full rounded-md border border-transparent bg-slate-100 dark:bg-gray-700 py-2 pl-10 pr-3 leading-5 text-slate-900 dark:text-white placeholder-gray-400  focus:outline-none sm:text-sm"
                          onChange={(event) => setQuery(event.target.value)}
                          displayValue={(book) => book?.title}
                        />
                       <Link href={`/books/search/${query.toLowerCase()}`}>
                       <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                          <MagnifyingGlassIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Combobox.Button>
                       </Link>

                        {query && !books?.length ? (
                          <Combobox.Options className={`${!query ? 'hidden' : 'absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'}`}>
                            <p className="p-2  block w-full">
                              No Books is Found about {query}
                            </p>
                          </Combobox.Options>
                        ) : (
                          <Combobox.Options className={`${!query ? 'hidden' : 'absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'}`}>
                            {filteredBook?.map((book) => (
                              <>
                                <Combobox.Option
                                  key={book?.isbn13}
                                  value={book}
                                  className={({ active }) =>
                                    classNames(
                                      "relative cursor-default select-none py-2 pl-3 pr-9",
                                      active
                                        ? "bg-indigo-600 dark:bg-indigo-500 text-white"
                                        : "text-slate-800 dark:text-slate-300"
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
                             className="p-2  text-slate-800 dark:text-slate-100 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white font-semibold flex flex-row items-center gap-2 "
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
              <div className="pl-4 mr-1 block lg:hidden">
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
              <div className="px-3 block lg:hidden">
              {
                !currentUser?.success ?  <>
                 <Link
                      href="/login"
                      className={`block border border-transparent py-1 px-2 rounded text-base bg-indigo-600 dark:bg-indigo-500 text-slate-100 dark:text-slate-50 ml-1`}
                    >
                      Login
                    </Link>
                </> : <>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none ">
                      <span className="sr-only">Open user menu</span>
                      {
                        !currentUser?.image ? <>
                        <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-slate-800 dark:bg-slate-300">
    <svg className="h-full w-full text-slate-300  dark:text-slate-800" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  </span>
                        </> : <>
                        <img className="h-8 w-8 rounded-full" src={currentUser?.data?.imageUrl} alt="" />
                        </>
                      }
                     
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg focus:outline-none bg-white dark:bg-slate-700">
                      <Menu.Item>
                          {({ active }) => (
                          <>
                             {
                              userLink.map(items => {
                                return  <Link
                                key={items.id}
                                href={items.link}
                                  className={classNames(
                                    active ? 'bg-indigo-600 text-slate-100' : '',
                                    'flex justify-start items-center px-4 py-2 text-sm hover:text-slate-100 hover:bg-indigo-600'
                                  )}
                                >
                                  <span>{items?.icon || ''}</span>
                                  {items.name}
                                </Link>
                              })
                             }
                             <button className="flex justify-center items-center w-full px-4 py-2 text-sm hover:bg-red-700 hover:text-slate-100"
 onClick={handleLogout}>
 <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />
                            <span>Logout</span>
                             </button>
                            
                          </>
                          )}
                        </Menu.Item>
      
                    </Menu.Items>
                  </Transition>
                </Menu>
                </>
               }
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
              <div className="hidden lg:ml-6 lg:block">
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
              <div className="hidden lg:ml-5 lg:block">
               {
                !currentUser?.success ?  <>
                 <Link
                      href="/login"
                      className={`block border border-transparent py-1 px-4 rounded text-base bg-indigo-600 dark:bg-indigo-500 text-slate-100 dark:text-slate-50 ml-4`}
                    >
                      Login
                    </Link>
                </> : <>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none ">
                      <span className="sr-only">Open user menu</span>
                      {
                        !currentUser?.image ? <>
                        <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-slate-800 dark:bg-slate-300">
    <svg className="h-full w-full text-slate-300  dark:text-slate-800" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  </span>
                        </> : <>
                        <img className="h-8 w-8 rounded-full" src={currentUser?.data?.imageUrl} alt="" />
                        </>
                      }
                     
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg focus:outline-none bg-white dark:bg-slate-700">
                      <Menu.Item>
                          {({ active }) => (
                          <>
                             {
                              userLink.map(items => {
                                return  <Link
                                key={items.id}
                                href={items.link}
                                  className={classNames(
                                    active ? 'bg-indigo-600 text-slate-100' : '',
                                    'flex justify-start items-center px-4 py-2 text-sm hover:text-slate-100 hover:bg-indigo-600'
                                  )}
                                >
                                  <span>{items?.icon || ''}</span>
                                  {items.name}
                                </Link>
                              })
                             }
                             <button className="flex justify-center items-center w-full px-4 py-2 text-sm hover:bg-red-700 hover:text-slate-100"
 onClick={handleLogout}>
 <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />
                            <span>Logout</span>
                             </button>
                            
                          </>
                          )}
                        </Menu.Item>
      
                    </Menu.Items>
                  </Transition>
                </Menu>
                </>
               }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
          <div className="border-t border-b border-slate-400 dark:border-gray-700 py-3">
            <div className="flex lg:hidden flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <Combobox
                      as="div"
                      value={selectedBook}
                      onChange={setSelectedBook}
                    >
                      <div className="relative my-1">
                        <Combobox.Input
                          placeholder="Search Books"
                          className="block w-full rounded-md border border-transparent bg-slate-100 dark:bg-gray-700 py-2 pl-10 pr-3 leading-5 text-slate-900 dark:text-white placeholder-gray-400  focus:outline-none sm:text-sm"
                          onChange={(event) => setQuery(event.target.value)}
                          displayValue={(book) => book?.title}
                        />
                       <Link href={`/books/search/${query.toLowerCase()}`}>
                       <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                          <MagnifyingGlassIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </Combobox.Button>
                       </Link>

                        {query && !books?.length ? (
                          <Combobox.Options className={`${!query ? 'hidden' : 'absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'}`}>
                            <p className="p-2  block w-full">
                              No Books is Found about {query}
                            </p>
                          </Combobox.Options>
                        ) : (
                          <Combobox.Options className={`${!query ? 'hidden' : 'absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'}`}>
                            {filteredBook?.map((book) => (
                              <>
                                <Combobox.Option
                                  key={book?.isbn13}
                                  value={book}
                                  className={({ active }) =>
                                    classNames(
                                      "relative cursor-default select-none py-2 pl-3 pr-9",
                                      active
                                        ? "bg-indigo-600 dark:bg-indigo-500 text-white"
                                        : "text-slate-800 dark:text-slate-300"
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
                             className="p-2  text-slate-800 dark:text-slate-100 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white font-semibold flex flex-row items-center gap-2 "
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
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
            {
                      menuLink?.map(menu => 
                        
                        <Link
                      key={menu.id}
                      href={menu.link}
                      className={`block py-1 px-3 text-center mx-auto border-2 border-transparent hover:border-indigo-600 dark:hover:border-indigo-500 rounded text-base${
                        router.pathname === menu.link
                          && " border-transparent bg-indigo-600 dark:bg-indigo-500 text-slate-100 dark:text-slate-50 font-bold"
                      } `}
                    >
                      {menu.name}
                    </Link>
                      )
                    }
            </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
