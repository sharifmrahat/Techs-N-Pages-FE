import Dashboard from "../../components/common/Dashboard";
import withAuth from "../../components/common/WithAuth";

function index() {
  return (
    <>
      <Dashboard component="Overview Graph"></Dashboard>
    </>
  );
}


export default index