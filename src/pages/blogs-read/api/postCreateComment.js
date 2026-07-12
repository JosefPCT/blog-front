// Main function that handles the POST to create the actual comment on the backend by using fetch with a method of 'POST'
// Returns the created comment data (if needed)
// Used by CommentForm component
export default async function postCreateComment(publicPostId, text){
  const apiUrl = import.meta.env.VITE_API_URL;

  console.log("posting comment...");
  console.log(text);

  const storedToken = localStorage.getItem("token");
  if(!storedToken){
    console.log("No token in storage");
    throw new Error("No token in storage");
  }
  const token =  JSON.parse(storedToken);

  const response = await fetch(`${apiUrl}/api/v1/posts/${publicPostId}/comments`, {
    method:'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.value}`
    },
    // body: JSON.stringify({ email: "updateuser@gmail.com", password: "user"})
    body: JSON.stringify({ 
      text: text
    })
  });
  if(!response.ok){
    throw new Error("Network response is not ok");
    // throw new Error("Wrong Username or Password");
  }

  const result = await response.json();
  return result;
}