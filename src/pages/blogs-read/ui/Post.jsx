import { useQuery } from "@tanstack/react-query";
import fetchSpecificPost from "../api/fetchSpecificPost";
import { dateFormatter } from "../../../shared/lib";

const Post = ({ publicId, postSlug }) => {
  const { isPending, isError, data, error} = useQuery({
    queryKey: ['specificPost'],
    queryFn: () => fetchSpecificPost(publicId)
  })

  console.log(data);

  if (isPending){
    return <span>Loading...</span>
  }

  if (isError){
    return <span>Error: {error.message} </span>
  }

  return(
    <>
      <p>Individual Post Page</p>
      <p>{publicId}</p>
      <p>{postSlug}</p>
      <p>{data.title}</p>
      <p>Posted on: {dateFormatter(data.createdAt)}</p>
      <p>Author: {data.authorName}</p>
      <p>Post body: {data.text}</p>
    </>
  )
}

export default Post;