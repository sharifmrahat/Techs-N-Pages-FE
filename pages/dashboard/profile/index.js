import { useRouter } from "next/router";
import Dashboard from "../../../components/common/Dashboard";
import UpdateProfile from "../../../components/UpdateProfile";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { useEffect } from 'react'

function Profile() {
  const [currentUser] = useCurrentUser()

  const router = useRouter()

  const component = <UpdateProfile></UpdateProfile>
  
  // useEffect(()=> {
  //   if(!currentUser.success){
  //   router.push('/')
  //   }
  // }, [currentUser, router])

    return (
        <>
      <Dashboard component={component}></Dashboard>
    </>
    );
}


export default Profile;