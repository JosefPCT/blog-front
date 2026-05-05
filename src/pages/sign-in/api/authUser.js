export default async function authUser(loginUserDetails={}){
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
  localStorage.setItem("token", result.token)
  console.log(result);
  return result;
}