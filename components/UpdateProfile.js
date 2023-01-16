/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthProvider"
import Alert from "./common/Alert"
import Spinner from "./common/Spinner"


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
export default function UpdateProfile({toggleView}) {
    const { user, loading, callRefetch } = useContext(AuthContext)
    const [result, setResult] = useState({})
    const [submit, setSubmit] = useState(false)
    let [profileInput, setProfileInput] = useState({
        name: user.name,
        email: user.email,
        imageURL: user?.imageURL
    })

    const handleInputs = (e) => {
        const inputName = e.target.name.value 
        const inputEmail = e.target.email?.value
        const inputImageURL = e.target.imageURL?.value 
        setProfileInput({
            name: inputName,
            email: inputEmail,
            imageURL: inputImageURL
        })
    }

    const handleUpdate = async(e) => {
        e.preventDefault()
        setSubmit(true)

       const updateData = {
            name: e.target.name.value,
            email: e.target.email.value,
            imageURL: e.target.imageURL?.value,
            currentPassword: e.target.currentPassword.value,
            newPassword: e.target.newPassword.value,
            confirmNewPassword: e.target.confirmNewPassword.value,
        }

        const url = `https://techs-n-pages.onrender.com/api/v1/user/update`
        try {
           await fetch(url, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(updateData)
            })
            .then(res => res.json())
            .then(data => {
              if(data?.data){
                setResult(data?.data)
                setSubmit(false)
              }
              if(data?.data?.modifiedCount){
                    alert("Update Success")
                    setSubmit(false)
                    toggleView()
                }
                if(data.data.error){
                  setSubmit(false)
                  setResult(data.data)
                }
            }) 
        } catch (error) {
          setResult({error: error})
          alert("Internal Server error!")
          setSubmit(false)
        }

    }

    useEffect(()=> {
        setProfileInput({
            name: user.name,
            email: user.email,
            imageURL: user.imageURL
        })

        if(result?.modifiedCount){
          callRefetch()
          toggleView()
        }
    }, [user, callRefetch, result])

    

    console.log(result)
    return (
     <>
        {
          loading ? <Spinner/> : <>
           <div className="m-5 lg:m-10 mx-auto lg:mx-auto w-max lg:w-1/2 bg-slate-200 dark:bg-slate-800  rounded-md shadow-md p-5 font-primary text-slate-900 dark:text-slate-200">
                    <div>
                      <form onSubmit={handleUpdate} onChange={handleInputs}  className="space-y-6">
                        {/* <div className={`${!result?.error ? 'hidden' : 'block'}`}>
                          {
                            !result?.success && <Alert message={result?.error} />
                          }
                        </div> */}
                        <div
                                    className={`${
                                      !result?.error ? "hidden" : "block"
                                    }`}
                                  >
                                    {!result?.success && (
                                      <Alert message={result?.error} />
                                    )}
                                  </div>
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
                          <label
                            htmlFor="imageURL"
                            className="block text-sm font-medium mb-1 text-slate-800 dark:text-slate-300"
                          >
                            Image URL
                          </label>
                          <input
                            type="text"
                            name="imageURL"
                            id="imageURL"
                            value={profileInput.imageURL}
                            placeholder="Enter your email"
                            className="block w-full rounded-md  py-3 px-4 bg-slate-300 dark:bg-gray-700 shadow-sm focus:outline-none"
                          />
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
                            value={profileInput.name}
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
                          disabled={true}
                            type="email"
                            name="email"
                            id="email"
                            value={profileInput.email}
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
                            name="confirmNewPassword"
                            type="password"
                            placeholder="Re-enter Password"
                            className="block w-full rounded-md  py-3 px-4 bg-slate-300 dark:bg-gray-700 shadow-sm focus:outline-none"
                          />
                        </div>

                        <div>
                          {
                            submit ? 
                            <Spinner type="clip"></Spinner> 
                            : <button
                            type="submit"
                            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 dark:bg-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Update
                          </button>
                          }
                          
                        </div>
                      </form>
                    </div>
                  </div>
          </>
        }
     </>
    )
  }
  