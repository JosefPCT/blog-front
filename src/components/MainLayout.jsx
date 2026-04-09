import { Outlet } from "react-router";

function MainLayout(){
  return(
    <>
      <nav>Navigation</nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}

export default MainLayout;