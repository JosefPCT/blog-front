import { NavLink } from "react-router";

import NavigationLinks from "./NavigationLinks";
import styles from "./NavigationContent.module.css";

const NavigationContent = () => {
  return(
    <div className={styles.flexContainer}>
      <div><NavLink to="/">Logo</NavLink></div>
      <nav>
        <NavigationLinks />
      </nav>
    </div>
  )
}

export default NavigationContent;