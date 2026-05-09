import { isTokenValid } from "../lib/tokenHelper";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUser } from "../api";

const NavigationSection = () => {
  const { isPending, isError, data, error} = useQuery({
    queryKey: ['currentUser'],
    queryFn: () => fetchCurrentUser(),
  })
  return(
    <nav>
      <a href="#">Home</a>
      <a href="#">All Blogs</a>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>

      { isTokenValid() ? <a href="#">Logout</a> : <a href="#">Login</a> }
      { data && <span>Hello, { data.firstName, data.lastName}</span>}
    </nav>
  )
}

export default NavigationSection;