import { useContext, useEffect } from "react";
// import useCurrentUser fro../hooks/useCurrentUserser";
import Login from "../pages/login";
import Spinner from "../components/common/Spinner";
import { AuthContext } from "./AuthProvider";

const privateRoute = (Component) => {
    const Auth = (props) => {
      const { user, loading, setRefetch } = useContext(AuthContext)

          useEffect(() => {
    if (!user) {
      setRefetch(true);
    }
  }, [user, setRefetch]);
      if(loading){
        return <Spinner/>
      }
      if (user) {
        return (
            <Component {...props} />
           
        );
      }
      return (
        <Login></Login>

      );
      
    };
  
    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
  };
  
  export default privateRoute;