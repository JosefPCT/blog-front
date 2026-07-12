// Main function that handles updating the 'user' resource in the backend for the `liked_comments` field by sending either a `likedComments` to add the comment to the list of the liked comments of the user or `dislikedComment` to remove the comment from the list of the liked_comments of the user
// Also updates the total likes of the comment by incrementing or decrementing it
export default async function updateUserLikedComment(userId, commentPublicId, fieldName){
  const apiUrl = import.meta.env.VITE_API_URL;

  console.log("liking a comment...");
  console.log(userId);
  console.log(commentPublicId);
  console.log(fieldName);
  

  const storedToken = localStorage.getItem("token");
  if(!storedToken){
    console.log("No token in storage");
    throw new Error("No token in storage");
  }
  const token =  JSON.parse(storedToken);
  console.log(token.value);

  const response = await fetch(`${apiUrl}/api/v1/users/${userId}`, {
    method:'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.value}`
    },
    // body: JSON.stringify({ email: "updateuser@gmail.com", password: "user"})
    body: JSON.stringify({ 
      [fieldName]: commentPublicId
    })
  });
  if(!response.ok){
    throw new Error("Network response is not ok");
    // throw new Error("Wrong Username or Password");
  }

  const result = await response.json();
  return result;
}