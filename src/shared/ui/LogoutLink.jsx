import { Link } from "react-router";

const LogoutLink = ({ onLogout }) => {
  return(
    // <Link to="/" onClick={onLogout}>
    //     Logout
    // </Link>
    <a href="/" onClick={onLogout}>
      Logout
    </a>
  )
}

export default LogoutLink;