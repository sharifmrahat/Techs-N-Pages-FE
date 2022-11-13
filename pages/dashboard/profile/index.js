import Dashboard from "../../../components/common/Dashboard";
import UpdateProfile from "../../../components/UpdateProfile";

function index() {

  const component = <UpdateProfile></UpdateProfile>
  
    return (
        <>
      <Dashboard component={component}></Dashboard>
    </>
    );
}


export default index;