import Dashboard from "../../../components/common/Dashboard";
import DataTable from "../../../components/common/DataTable";
import withAuth from "../../../components/common/WithAuth";

function index() {

  const component = <DataTable routeName="My Bag"></DataTable>
    return (
    <>
      <Dashboard component={component}></Dashboard>
    </>
    );
}


export default withAuth(index);