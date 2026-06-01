export default async function registerUser(data = {}){
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/api/v1/users`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({ email: "updateuser@gmail.com", password: "user"})
    body: JSON.stringify({ 
      email: data.email , 
      password: data.password,
      confirm_password: data.confirm_password,
      firstName: data.firstName,
      lastName: data.lastName
    })
  });
  if(!response.ok){
    throw new Error("Network response is not ok");
    // throw new Error("Wrong Username or Password");
  }

  const result = await response.json();
  return result;
}