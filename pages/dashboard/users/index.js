import Dashboard from "../../../components/common/Dashboard";
import DataTable from "../../../components/common/DataTable";

function index() {

  const component = <DataTable routeName="Manage Users"></DataTable>
  
    return (
        <>
      <Dashboard component={component}></Dashboard>
    </>
    );
}


export default index;