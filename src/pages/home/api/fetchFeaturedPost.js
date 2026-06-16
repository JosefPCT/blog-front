export default async function fetchFeaturedPost(urlQuery=""){
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(`${apiUrl}/api/v1/posts${urlQuery}`);
  const response = await fetch(`${apiUrl}/api/v1/posts${urlQuery}`);
  if(!response.ok){
    throw new Error("Network response is not ok");
  }
  const result = await response.json();
  const post = result[0];

  let authorResponse = await fetch(`${apiUrl}${post.author}`);
  let authorData = await authorResponse.json();
  post.authorName = `${authorData.firstName} ${authorData.lastName}`;

  return post;
}