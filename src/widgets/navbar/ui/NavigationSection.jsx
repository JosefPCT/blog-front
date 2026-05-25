
// Navigation Section of the app
// Houses the `logout` function of the app, clearing data for both of the global context: `isAuth` and `user`
import { Link } from "react-router";

import { useAuth, useUser, LogoutLink } from "../../../entities/user";;

const NavigationSection = () => {
  const { isAuth, setIsAuth } = useAuth();
  const { user, setUser} = useUser();

  const handleLogout= (event) => {
    console.log("Logout button was clicked", event);
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  }
  
  return(
    <nav>
      <Link to='/'>Home</Link>
      <a href="#">All Blogs</a>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>

      { isAuth ? <LogoutLink onLogout={handleLogout} />: <Link to='/sign-in'>Login</Link> }
      { isAuth && user && <span> Hello, {user.firstName}</span>}
      
    </nav>
  )
}

export default NavigationSection;