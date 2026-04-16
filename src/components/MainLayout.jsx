import { Outlet } from "react-router";

function MainLayout(){
  return(
    <>
      <nav>
        <a href="#">Home</a>
        <a href="#">All Blogs</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>

        <a href="#">Login</a>
        <a href="#">Logout</a>
      </nav>

      <Outlet />
      
      <footer>Copyright 2026</footer>
    </>
  )
}

export default MainLayout;