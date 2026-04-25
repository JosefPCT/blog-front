// Function that fetches a specific post by the api url's parameter, returns the parsed json data of the post
// Used in a query function
export default async function fetchSpecificPost(postPublicId){
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(`${apiUrl}/api/v1/posts/${postPublicId}`);
  const response = await fetch(`${apiUrl}/api/v1/posts/${postPublicId}`);
  if(!response.ok){
    throw new Error("Network response is not ok");
  }
  const post = await response.json();
  let authorResponse = await fetch(`${apiUrl}${post.author}`);
  let authorData = await authorResponse.json();
  post.authorName = `${authorData.firstName} ${authorData.lastName}`;
  return post;
}