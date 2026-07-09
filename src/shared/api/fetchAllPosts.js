// Function that fetches posts by the api url, returns the parsed json of posts
// Used in a query function
// Adds a default limit if no limit is defined, but can be set to null to fetch queries without any limit on the results
export default async function fetchAllPosts(urlQuery, limitBy=3){
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(`${apiUrl}/api/v1/posts${urlQuery}`);

  urlQuery = urlQuery ? urlQuery + `&limit=${limitBy}` : `?limit=${limitBy}`;
  
  const response = await fetch(`${apiUrl}/api/v1/posts${urlQuery}`);
  if(!response.ok){
    throw new Error("Network response is not ok");
  }
  const posts = await response.json();

  // Furthers modify the results to include the author's name by fetching data again 
  for (const post of posts){
    let authorResponse = await fetch(`${apiUrl}${post.author}`);
    let authorData = await authorResponse.json();
    // console.log("author data");
    // console.log(authorData);
    post.authorName = `${authorData.firstName} ${authorData.lastName}`;
  }

  // if(limit !== undefined){
  //   return posts.slice(0, limit);
  // }

  return posts;
}