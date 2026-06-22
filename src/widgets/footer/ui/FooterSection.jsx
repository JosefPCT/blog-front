import { NavLink } from "react-router";

import { JosefBigLogo } from "../../../shared/assets";
import styles from './FooterSection.module.css';

export default function FooterSection(){
  return (
    <div className={styles.footerContainer}>
      <div className={styles.brandContainer}>
        <NavLink to="/"><img src={JosefBigLogo} alt="Header Logo" srcset="" /></NavLink>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.pagesLinks}>
            
            <ul>
                <span className={styles.listHeader}>Pages</span>
                <li>Home</li>
                <li>Subscribe</li>
                <li>404</li>
            </ul>
        </div>
        <div className={styles.categoriesLinks}>
            <ul>
                <span>Categories</span>
                <li>All</li>
                <li>Entrepeneurship</li>
                <li>Creator</li>
                <li>Tech</li>
            </ul>
        </div>
        <div className={styles.contactLinks}>
            <ul>
                <span>Contact</span>
                <li>X (Twitter)</li>
                <li>LinkedIn</li>
                <li>Email us</li>
            </ul>
        </div>
        <div className={styles.otherLinks}>
            <ul>
                <span>Other</span>
                <li>Buy template</li>
                <li>More templates</li>
                <li>Made in Framer</li>
                <li>Built by Bryn</li>
            </ul>
        </div>
      </div>
    </div>
  )    
}