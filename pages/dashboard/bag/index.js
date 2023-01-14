import Dashboard from "../../../components/common/Dashboard";
import DataTable from "../../../components/common/DataTable";

function index() {

  const component = <DataTable routeName="My Bag"></DataTable>
    return (
    <>
      <Dashboard component={component}></Dashboard>
    </>
    );
}


export default index;