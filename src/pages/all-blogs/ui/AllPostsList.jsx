import { useQuery } from "@tanstack/react-query";
import { fetchAllPosts } from "../../../shared/api";

const AllPostsList = () => {
  const urlQuery = "?sort=+createdAt";
  
  const { isPending, isError, data, error }= useQuery({
    queryKey: ['posts'],
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
      {data.map((post) => 
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