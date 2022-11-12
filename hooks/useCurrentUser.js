import { useEffect, useState } from "react";

function useCurrentUser() {
const [currentUser, setCurrentUser] = useState([])
const token = localStorage.getItem("accessToken")
useEffect(()=> {
    const url = `https://techs-n-pages.onrender.com/api/v1/user/currentUser`
    if(token){
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`,
            },
            })
            .then(res => res.json())
            .then(data => setCurrentUser(data))
          }

    else{
        setCurrentUser({success: false})
    }
    }
  
,[token])

return [currentUser, setCurrentUser]
}

export default useCurrentUser;