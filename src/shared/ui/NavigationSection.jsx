import { isTokenValid } from "../lib/tokenHelper";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { fetchCurrentUser } from "../api";
import LogoutLink from "./LogoutLink";


const NavigationSection = () => {
  // Creates a state to get the token from local storage, to implement a depedency on the token to refetch if it changes state (removed/added)
  // const [localToken, setLocalToken] = useState(() => localStorage.getItem("token"));
  // const [user, setUser] = useState({});
  const location = useLocation();

  const queryClient = useQueryClient();

  // In the queryKey, make sure to add the localToken state variable to automatically trigger a refetch if the token's value changes
  const { isPending, isError, data, error} = useQuery({
    queryKey: ['currentUser'],
    // queryKey: ['currentUser'],
    // queryFn: () => fetchCurrentUser(localToken),
    queryFn: () => fetchCurrentUser(),
    // enabled: !!localToken
  })

  const handleLogout= (event) => {
    console.log("Logout button was clicked");
    localStorage.removeItem("token");
    // queryClient.clear();
    queryClient.removeQueries({ queryKey: ['currentUser']});
    // setLocalToken(null);
  }

  console.log("data value");
  console.log(data);


  return(
    <nav>
      <Link to='/'>Home</Link>
      <a href="#">All Blogs</a>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>

      { isTokenValid() ? <LogoutLink onLogout={handleLogout} />: <Link to='/sign-in'>Login</Link> }
      { data && <span>Hello, { data.firstName, data.lastName}</span>}
    </nav>
  )
}

export default NavigationSection;