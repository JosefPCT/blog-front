import { useQuery } from "@tanstack/react-query";

import { fetchAllPosts } from "../../../shared/api";

const AllPostsList = ( {searchParams, setSearchParams}) => {
  const category = searchParams.get("category") || "";
  const value = searchParams.get("value") || "";
  // const urlQuery = "?sort=+createdAt";
  // const urlQuery = `?${category}=${value}`;
  const urlQuery = searchParams.has("category") && searchParams.has("value") ? `?${category}=${value}` : "?sort=+createdAt";

  const finalQuery = "";

  let query = "?sort=+createdAt";
  query = searchParams.has("title") &&  searchParams.has("value") ? query + `title=${value}` : "";

  console.log("Test");
  console.log(searchParams.get("category"));

  console.log("Category");
  console.log(category)
  console.log("Value:");
  console.log(value);

  
  
  const { isPending, isError, data, error }= useQuery({
    queryKey: ['allPosts', urlQuery],
    queryFn: () => fetchAllPosts(urlQuery),
  });

  if (isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <span>Error: {error.message}</span>
  }

  return (
    <ul>
      {Array.isArray(data) && data.map((post) => 
      <li key={post.publicId}>
        <a href={`/posts/${post.publicId}/${post.title}`}><p>{post.title}</p></a>
        <p>{post.text}</p>
        <p>{post.createdAt}</p>
        <p>{post.authorName}</p>
      </li>)}
    </ul>
  )
}

export default AllPostsList;