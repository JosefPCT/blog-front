import { NavLink } from "react-router";
import { useAuth } from "../model/AuthContext";
import { useUser } from "../model/UserContext";

import styles from './LogoutLink.module.css';

const LogoutLink = () => {
  const { setIsAuth } = useAuth();
  const { setUser } = useUser();

  const handleLogout= (event) => {
    console.log("Logout button was clicked", event);
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  }
  return(
    <NavLink 
      to="/"
      className={`${styles.authLink} ${styles.logoutBtn}`}
      onClick={handleLogout}>
        Logout
    </NavLink>
  )
}

export default LogoutLink;