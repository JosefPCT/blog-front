import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";

const ContextConsumer = () => {
  const { isAuth, setIsAuth }= useContext(AuthContext);
  const { isUser, setUser} = useContext(UserContext);

  console.log("Context value for auth:");
  console.log(isAuth);

  console.log("Context value for user:");
  console.log(isUser);

  const userToggle = () => {
    setUser((prev) => (prev === "unauthorized" ? 'authorized' : 'unauthorized'))
  }

  const authToggle = () => {
    setIsAuth((prev) => (prev === false ? true : false))
  }

  return(
    <>
      <p>Context Consumer</p>
      <p>Context value for auth:</p>
      <p>{isAuth}</p>
      <p>Context value for user:</p>
      <p>{isUser}</p>

      <button onClick={userToggle}>Change User</button>
      <button onClick={authToggle}>Toggle Auth</button>
    </>
  )
}

export default ContextConsumer;