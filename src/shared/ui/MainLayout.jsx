import { Outlet } from "react-router";
import NavigationSection from "./NavigationSection";

function MainLayout(){
  return(
    <>
      <NavigationSection />

      <Outlet />
      
      <footer>Copyright 2026</footer>
    </>
  )
}

export default MainLayout;