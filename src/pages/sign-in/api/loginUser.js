// import { setToken } from "../../../shared/lib/tokenHelper";

export default async function loginUser(loginUserDetails={}){
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/api/v1/auth/login`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({ email: "updateuser@gmail.com", password: "user"})
    body: JSON.stringify({ email: loginUserDetails.user_name , password: loginUserDetails.password})
  });
  if(!response.ok){
    throw new Error("Network response is not ok");
    // throw new Error("Wrong Username or Password");
  }

  const result = await response.json();
  const token = { value: result.token, created: Date.now(), expiryInMins: 15};
  console.log(token);

  localStorage.setItem("token", JSON.stringify(token));
  console.log(result);
  return result;
}