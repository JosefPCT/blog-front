import { NavLink } from "react-router";

import NavigationLinks from "./NavigationLinks";
import styles from "./NavigationContent.module.css";
import { JosefBigLogo } from "../../../shared/assets";

const NavigationContent = () => {
  return(
    <div className={styles.flexContainer}>
      {/* <div className={styles.headerLogo}><NavLink to="/">Josef</NavLink></div> */}
      <div className={styles.logoImgContainer}><NavLink to="/"><img src={JosefBigLogo} alt="Header Logo" srcset="" /></NavLink></div>
      <nav>
        <NavigationLinks />
      </nav>
    </div>
  )
}

export default NavigationContent;