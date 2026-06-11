
// Navigation Section of the app
// Houses the `logout` function of the app, clearing data for both of the global context: `isAuth` and `user`
import { Link } from "react-router";

import { useAuth, useUser, LogoutLink } from "../../../entities/user";;

const NavigationSection = () => {
  const { isAuth } = useAuth();
  const { user } = useUser();

  return(
    <>
      <Link to='/'>Home</Link>
      <a href="#">All Blogs</a>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>

      { isAuth ? <LogoutLink />: <Link to='/sign-in'>Login</Link> }
      { isAuth && user && <span> Hello, {user.firstName}</span>}
      
    </>
  )
}

export default NavigationSection;