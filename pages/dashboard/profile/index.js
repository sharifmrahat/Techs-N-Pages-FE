import Dashboard from "../../../components/common/Dashboard";
import UpdateProfile from "../../../components/UpdateProfile";

function Profile() {

  const component = <UpdateProfile></UpdateProfile>

    return (
        <>
      <Dashboard component={component}></Dashboard>
    </>
    );
}


export default Profile;