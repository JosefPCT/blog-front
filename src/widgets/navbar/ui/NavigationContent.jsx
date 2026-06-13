import { NavLink } from "react-router";

import NavigationLinks from "./NavigationLinks";
import styles from "./NavigationContent.module.css";
import logo from "./../../../shared/assets/Josef.png"

const NavigationContent = () => {
  return(
    <div className={styles.flexContainer}>
      {/* <div className={styles.headerLogo}><NavLink to="/">Josef</NavLink></div> */}
      <div><NavLink to="/"><img src={logo} alt="Header Logo" srcset="" /></NavLink></div>
      <nav>
        <NavigationLinks />
      </nav>
    </div>
  )
}

export default NavigationContent;