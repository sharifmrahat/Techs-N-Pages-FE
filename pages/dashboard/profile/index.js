import { useContext, useEffect, useState } from "react";
import Dashboard from "../../../components/common/Dashboard";
import Spinner from "../../../components/common/Spinner";
import UpdateProfile from "../../../components/UpdateProfile";
import ViewProfile from "../../../components/ViewProfile";
import { AuthContext } from "../../../context/AuthProvider";

function Profile() {
  const { user, loading } = useContext(AuthContext)

  const [component, setComponent] = useState(<Spinner></Spinner>)

  const toggleEdit = () => {
      setComponent(updateComponent)
  }

  const toggleView = () => {
    setComponent(viewComponent)
  }

  const viewComponent = <ViewProfile toggleEdit={toggleEdit}></ViewProfile>
  const updateComponent = <UpdateProfile toggleView={toggleView}></UpdateProfile>

 useEffect(()=> {
  if(user){
    setComponent(viewComponent)
  }
 }, [user])

    return (
        <>
      <Dashboard component={component}></Dashboard>
    </>
    );
}


export default Profile;