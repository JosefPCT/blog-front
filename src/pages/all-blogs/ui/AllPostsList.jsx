import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

import { fetchAllPosts } from "../../../shared/api";

const AllPostsList = ( {searchParams, page }) => {
  const category = searchParams.get("category") || "";
  const value = searchParams.get("value") || "";
  // const urlQuery = "?sort=+createdAt";
  // const urlQuery = `?${category}=${value}`;
  // const urlQuery = searchParams.has("category") && searchParams.has("value") ? `?${category}=${value}` : `?sort=+createdAt&page=${page}`;

  // Using `useLocation` instead of useSearchParams
  const location = useLocation();
  let searchQuery = location.search;

  //Checks if there's no search query adds default query
  searchQuery = searchQuery ? searchQuery : `?sort=+createdAt&page=${page}`;

  // NOTE: If you want to additional query to show in the url, use setSearchParams to add them instead of concatenating, use functional update to not delete the already set queries
  // const finalQuery = rawQuery ? rawQuery + `&page=${page}` : `?sort=+createdAt&page=${page}`;
  // searchQuery ? addQueryParam("page", page) : addQueryParam();
  // if(searchQuery !== null){
  //   addQueryParam("page", page);
  // } else {
  //   addQueryParam("sort", "+createdAt");
  //   addQueryParam("page", page);
  // }



  // addQueryParam("page", page);


  // let query = "?sort=+createdAt";
  // query = searchParams.has("title") &&  searchParams.has("value") ? query + `title=${value}` : "";

  // console.log("Test");
  // console.log(searchParams.get("category"));

  // console.log("Category");
  // console.log(category)
  // console.log("Value:");
  // console.log(value);

  
  
  const { isPending, isError, data, error }= useQuery({
    queryKey: ['allPosts', searchQuery],
    queryFn: () => fetchAllPosts(searchQuery),
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