import { Link } from "react-router";
import { useAuth } from "../model/AuthContext";
import { useUser } from "../model/UserContext";

const LogoutLink = () => {
  const { setIsAuth } = useAuth();
  const { setUser } = useUser();

  const handleLogout= (event) => {
    console.log("Logout button was clicked", event);
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  }
  return(
    <Link to="/" onClick={handleLogout}>
        Logout
    </Link>
  )
}

export default LogoutLink;