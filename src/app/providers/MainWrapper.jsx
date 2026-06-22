// Wrapper for the whole app, defines the provider and global state to give the entire app with
// Enables using `useContext` / `useHook`, for children components, avoids prop drilling
// import AppWrapper from "./AppWrapper";
import { Outlet } from "react-router";

import { NavigationContent, FooterSection } from "../../widgets";

// import { AuthProvider, UserProvider} from "../../entities/user";
import styles from './MainWrapper.module.css';

const MainWrapper = () => {
  return(
    <div className={styles.gridContainer}>
        <header className={styles.header}>
          <NavigationContent />
        </header>

        <main className={styles.mainContent}>
          <Outlet />
        </main>
        
        <footer className={styles.footer}>
          <FooterSection />
        </footer>
    </div>
  )
}

export default MainWrapper;