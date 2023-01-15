/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Dashboard from "../../../components/common/Dashboard";
import Spinner from "../../../components/common/Spinner";
import AdminRoute from "../../../context/AdminRoute";

function ManageUsers() {

  const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const token =  localStorage.getItem('accessToken')
  useEffect(() => {
    const url = `https://techs-n-pages.onrender.com/api/v1/user/all`;
    setLoading(true)
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(res => res.json())
      .then(data => {
          if (data.success) {
              setUsers(data.data);
          }
          setLoading(false)
      })
      .catch(err => {
          setUsers([{err}]);
          setLoading(false)
      })
}, [token])

console.log(users)

  const component = <>
  {
    loading ? <Spinner></Spinner> :  <div className="px-4 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-300">Manage Users</h1>
        {/* <p className="mt-2 text-sm text-gray-700">
          A list of all the users in your account including their name, title, email and role.
        </p> */}
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add New User
        </button>
      </div>
    </div>
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600">
              <thead className="bg-slate-100 dark:bg-gray-800 text-slate-800 dark:text-slate-300 transition-all duration-300 font-primary">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-bold sm:pl-6">
                    Image
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold ">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold ">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold">
                    Role
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold">
                    UpdatedAt
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-bold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600 bg-slate-100 dark:bg-gray-800 text-slate-800 dark:text-slate-300 transition-all duration-300 font-primary">
                {users.map((user) => (
                  <tr key={user.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {user?.imageUrl ? <><img className="inline-block h-6 w-6 overflow-hidden rounded-full" src={user?.imageUrl} alt={user?.name} /></>  : <>
                        <span className="inline-block h-6 w-6 overflow-hidden rounded-full bg-slate-800 dark:bg-slate-300">
                                <svg
                                  className="h-full w-full text-slate-300  dark:text-slate-800"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </span>
                      </>}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold">{user.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">{user.email}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">{user.role?.charAt(0).toUpperCase()+user.role?.slice(1)}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">{user.updatedAt}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">{user.isActive ? 'Active' : 'Inactive'}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {user.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  }
  
  
  </>
  
    return (
        <>
      <Dashboard component={component}></Dashboard>
    </>
    );
}


export default AdminRoute(ManageUsers);