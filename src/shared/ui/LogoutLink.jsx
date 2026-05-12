import { Link } from "react-router";

const LogoutLink = ( {onLogout}) => {
  // const handleLogout= (event) => {
  //   console.log("Logout button was clicked");
  //   localStorage.removeItem("token");
  // }
  return(
    <Link to="/" onClick={onLogout}>
        Logout
    </Link>
    // <a href="/" onClick={onLogout}>
    //   Logout
    // </a>
  )
}

export default LogoutLink;