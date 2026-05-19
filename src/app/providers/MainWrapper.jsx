import { Outlet } from "react-router";

import { NavigationSection } from "../../widgets/navbar";
import { AuthContext } from "../../entities/user";


function MainWrapper(){
  return(
    <>
      <AuthContext.Provider value="no">
        <NavigationSection />

        <Outlet />
      
        <footer>Copyright 2026</footer>
      </AuthContext.Provider>
    </>
  )
}

export default MainWrapper;