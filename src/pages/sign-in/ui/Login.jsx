import { useQuery } from "@tanstack/react-query";
import authUser from "../api/authUser";
import LoginForm from "./LoginForm";

const Login = () => {

  const { isPending, isError, data, error} = useQuery({
    queryKey: ['login'],
    queryFn: () => authUser(),
  })
  
  localStorage.setItem("testKey", "testvalue");
  const test = localStorage.getItem("token");
  console.log(test);

  if (isPending){
    return <span>Loading...</span>
  }

  if (isError){
    return <span>Error: {error.message}</span>
  }

  console.log("Data:");
  console.log(data.token);

  return(
    <>
      <h1>Login</h1>
      <LoginForm />
      <p>Token: {localStorage.getItem("token")}</p>
    </>
  )
}

export default Login;