import { Outlet } from "react-router";
import { isTokenValid } from "../lib/tokenHelper";

function MainLayout(){
  return(
    <>
      <nav>
        <a href="#">Home</a>
        <a href="#">All Blogs</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>

        { isTokenValid() ? <a href="#">Logout</a> : <a href="#">Login</a> }
      </nav>

      <Outlet />
      
      <footer>Copyright 2026</footer>
    </>
  )
}

export default MainLayout;