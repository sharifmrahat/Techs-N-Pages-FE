import { useContext, useEffect } from "react";
import Login from "../pages/login";
import Spinner from "../components/common/Spinner";
import { AuthContext } from "./AuthProvider";
import Error from "../pages/404";

const AdminRoute = (Component) => {
    const Auth = (props) => {
      const { user, loading, callRefetch } = useContext(AuthContext)

          useEffect(() => {
    if (!user) {
        callRefetch(true);
    }
  }, [user, callRefetch]);
      if(loading){
        return <Spinner/>
      }
      if (user?.role === 'admin') {
        return (
            <Component {...props} />
           
        );
      }
      return (
        <Error></Error>

      );
      
    };
  
    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
  };
  
export default AdminRoute;