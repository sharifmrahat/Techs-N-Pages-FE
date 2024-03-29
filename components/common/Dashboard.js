/* eslint-disable @next/next/no-img-element */
import { Fragment, useContext, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
  ViewColumnsIcon,
  ShoppingBagIcon,
  StarIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import DataTable from './DataTable'
import Spinner from './Spinner'
import Link from 'next/link'
import PrivateRoute from '../../context/PrivateRoute'
import { AuthContext } from '../../context/AuthProvider'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Dashboard({component}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, loading } = useContext(AuthContext)

  const router = useRouter()

  const navigation = [
    { id: 1, name: 'Dashboard', href: '/dashboard', icon: ViewColumnsIcon, current: router.pathname === '/dashboard' ? true : false },
    { id: 2, name: 'My Bag', href: '/dashboard/bag', icon: ShoppingBagIcon, current: router.pathname === '/dashboard/bag' ? true : false },
    { id: 3, name: 'Reviews', href: '/dashboard/reviews', icon: StarIcon, current: router.pathname === '/dashboard/reviews' ? true : false },
    { id: 6, name: 'Profile', href: '/dashboard/profile', icon: UserCircleIcon, current: router.pathname === '/dashboard/profile' ? true : false },
  ]

  const adminRoute = [ 
    { id: 4, name: 'Manage Users', href: '/dashboard/users', icon: UsersIcon, current: router.pathname === '/dashboard/users' ? true : false },
    { id: 5, name: 'Manage Orders', href: '/dashboard/orders', icon: ChartBarIcon, current: router.pathname === '/dashboard/orders' ? true : false },
  ]

if(user.role === 'admin'){
  navigation.push(...adminRoute)
}

  return (
    <>
       <div className='pb-52 font-primary bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                   
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-indigo-800 text-white'
                              : 'text-white hover:bg-indigo-600 hover:bg-opacity-75',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                 
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed h-screen md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-indigo-700">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              
              <nav className="mt-5 flex-1 space-y-1 px-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-indigo-800 text-white' : 'text-white hover:bg-indigo-600 hover:bg-opacity-75',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
           
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1 mb-96">
           {
            <div className="py-6">
            {component}
          </div>
           }
          </main>
        </div>
      </div>
    </>
  )
}
export default PrivateRoute(Dashboard)
