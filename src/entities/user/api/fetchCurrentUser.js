// Normal function that fetches data for the current user
export default async function fetchCurrentUser(){
  console.log("Token is valid, fetching current user...");
  const apiUrl = import.meta.env.VITE_API_URL;
  const storedToken = localStorage.getItem("token");
  if(!storedToken){
    console.log("No token in storage");
    throw new Error("No token in storage");
  }
  const token =  JSON.parse(storedToken);
  const response = await fetch(`${apiUrl}/api/v1/users/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token.value}`
    }
  });
  if(!response.ok){
    throw new Error("Network response is not ok");
  }
  const currentUser = await response.json();
  return currentUser;
}