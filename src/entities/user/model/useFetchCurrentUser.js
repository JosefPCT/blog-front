// Custom hook used by `UserProvider`, allows continuous update of the `user` global state by checking if `isAuth` has changed
// Note: Since the state `user, setUser` is defined at `UserProvider`, cannot use the custom hook `useUser` on this file, which needs it to be passed as an argument/parameter.
// Uses AbortController pattern to prevent the useEffect from runnining if the component unmounts
import { useState, useEffect } from "react";
// import { useUser } from "./UserContext";
import { useAuth } from "./AuthContext";

const useFetchCurrentUser = ( user, setUser) => {
//   const { user, setUser } = useUser();
  const { isAuth } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  console.log("Starting useEffect: Fetching Current User");

  useEffect(() => {
    const controller = new AbortController();

    const fetchUser = async() =>{
      try {
        const storedToken = localStorage.getItem("token");
        if(!storedToken){
          setError("No token in storage");
        }

        const token = JSON.parse(storedToken);
        const response = await fetch(`${apiUrl}/api/v1/users/me`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token.value}`
          },
          signal: controller.signal
        });
        if(!response.ok){
          throw new Error(`HTTP error!, status: ${response.status}`);
        }
        const result = await response.json();
        setUser(result);
      } catch (error) {
        if(error.name !== 'AbortError'){
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    if(isAuth){
      console.log("Authorized user, now fetching user data...");
      fetchUser();
    } else{
      console.log("Not authorized user,cancelling fetching...")
    }

    return () => controller.abort;
  }, [isAuth, apiUrl, setUser]);

//   console.log("Inside use effect, user global context data:")
//   console.log(user);

  return { user, loading, error}
}

export default useFetchCurrentUser;