// Wrapper for the whole app, defines the provider and global state to give the entire app with
// Enables using `useContext` / `useHook`, for children components, avoids prop drilling
// import AppWrapper from "./AppWrapper";
import { Outlet } from "react-router";

import { NavigationLinks } from "../../widgets/navbar";
// import { AuthProvider, UserProvider} from "../../entities/user";
import styles from './MainWrapper.module.css';

const MainWrapper = () => {
  return(
    <div className={styles.gridContainer}>
        <header className={styles.header}>
          <div>Logo</div>
          <nav className={styles.navLinks}>
            <NavigationLinks />
          </nav>
        </header>

        <main className={styles.mainContent}>
          <Outlet />
        </main>
        
        <footer className={styles.footer}>Copyright 2026</footer>
    </div>
  )
}

export default MainWrapper;