// Wrapper for the whole app, defines the provider and global state to give the entire app with
// Enables using `useContext` / `useHook`, for children components, avoids prop drilling
// import AppWrapper from "./AppWrapper";
import { Outlet } from "react-router";

import { NavigationSection } from "../../widgets/navbar";
import { AuthProvider, UserProvider} from "../../entities/user";


const MainWrapper = () => {
  return(
    <>
      <AuthProvider>
      <UserProvider>
        <NavigationSection />

        <Outlet />
    
        <footer>Copyright 2026</footer>
      </UserProvider>
      </AuthProvider>
    </>
  )
}

export default MainWrapper;