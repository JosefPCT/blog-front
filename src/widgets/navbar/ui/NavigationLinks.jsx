
// Navigation Section of the app
// Houses the `logout` function of the app, clearing data for both of the global context: `isAuth` and `user`
import { NavLink } from "react-router";

import { useAuth, useUser, LogoutLink } from "../../../entities/user";
import styles from "./NavigationLinks.module.css";

const NavigationLinks = () => {
  const { isAuth } = useAuth();
  const { user } = useUser();

  return(
    <div className={styles.navLinks}>
      <NavLink 
        to='/'
        className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link }
        end>Home</NavLink>
      <NavLink 
        to="/all-blogs"
        className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link }>
          All Blogs
      </NavLink>
      <NavLink 
        to="/about"
        className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link }>
          About
      </NavLink>
      <NavLink 
        to="/contact"
        className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link }>
          Contact Us
      </NavLink>

      { isAuth ? <LogoutLink />: 
        <NavLink 
          to='/sign-in'
          className={`${styles.authLink} ${styles.authItem} ${styles.loginBtn}`}
          >Login</NavLink> }
      { isAuth && user && <span> Hello, {user.firstName}</span>}
    </div>
  )
}

export default NavigationLinks;