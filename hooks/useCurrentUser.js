import { useState } from "react";
import { useQuery } from "react-query";

function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState([]);
  const [refetch, setRefetch] = useState(false);

  let token;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("accessToken");
  }

  const url = `https://techs-n-pages.onrender.com/api/v1/user/currentUser`;

  const {
    data,
    isLoading: loading,
    error,
  } = useQuery(["currentUser", refetch, token], () => {
    if (token || refetch) {
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setCurrentUser(data));
    } else {
      setCurrentUser({ success: false });
      setRefetch(false);
    }
  });

  return [currentUser, refetch, setRefetch, loading, error];
}

export default useCurrentUser;
