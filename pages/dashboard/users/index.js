import Dashboard from "../../../components/common/Dashboard";
import DataTable from "../../../components/common/DataTable";
import AdminRoute from "../../../context/AdminRoute";

function index() {

  const component = <DataTable routeName="Manage Users"></DataTable>
  
    return (
        <>
      <Dashboard component={component}></Dashboard>
    </>
    );
}


export default AdminRoute(index);