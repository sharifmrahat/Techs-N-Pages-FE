import { useRouter } from "next/router";
import useCurrentUser from "../../hooks/useCurrentUser";

const PrivateRoute = ({ children }) => {
  const [currentUser] = useCurrentUser();

  const router = useRouter()

//   if (loading) {
//     return <Loading></Loading>;
//   }

  if (!currentUser.success) {
    return router.push('/')
  }
  return children;
};

export default PrivateRoute;