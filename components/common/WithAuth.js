import { useEffect } from "react";
import useCurrentUser from "../../hooks/useCurrentUser";
import Login from "../../pages/login";
import Spinner from "./Spinner";

const withAuth = (Component) => {
    const Auth = (props) => {
        const [currentUser, refetch, setRefetch, loading, error] = useCurrentUser();

          useEffect(() => {
    if (currentUser.length === 0) {
      setRefetch(true);
    }
    // if (!currentUser.success) {
    //   setRefetch(true);
    // }
  }, [currentUser]);
      // Login data added to props via redux-store (or use react context for example)
      // If user is not logged in, return login component
    //   if(currentUser.loading){
    //     return <Spinner/>
    //   }
      if (currentUser.success) {
        return (
            <Component {...props} />
           
        );
      }
  
      // If user is logged in, return original component
    //   return (
    //     <Login></Login>

    //   );
      
    };
  
    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
  };
  
  export default withAuth;