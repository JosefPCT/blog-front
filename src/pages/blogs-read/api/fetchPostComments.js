// Helper function that fetches all the comments of a specific post, returns the parsed list of the comments
// Used in a query function for Tanstack (i.e CommentSection.jsx)

export default async function fetchPostComments(postPublicId, urlQuery="?sort=-createdAt"){
  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/api/v1/posts/${postPublicId}/comments${urlQuery}`);
  if(!response.ok){
    throw new Error("Network response is not ok");
  }
  const comments = await response.json();
  for (const comment of comments){
    let authorResponse = await fetch(`${apiUrl}${comment.author}`);
    let authorData = await authorResponse.json();
    // console.log("author data");
    // console.log(authorData);
    comment.authorName = `${authorData.firstName} ${authorData.lastName}`;
  }
  console.log("Comments List Data");
  console.log(comments);

  return comments;
}