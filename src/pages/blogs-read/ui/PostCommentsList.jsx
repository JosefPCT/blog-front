import { useQuery } from "@tanstack/react-query";
import fetchPostComments from "../api/fetchPostComments";
import { dateFormatter } from "../../../shared/lib";

const PostCommentsList = ({postPublicId}) => {
  const { isPending, isError, data, error} = useQuery({
    queryKey: ['specificPostComments'],
    queryFn: () => fetchPostComments(postPublicId)
  })

  if(isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <span>Error: {error.message }</span>
  }

  return(
    <ul>
      {data.map((comment) => 
      <li key={comment.publicId}>
        <a href={`/posts/${comment.publicId}/comments/${comment.publicId}/${comment.text}`}><p>{comment.text}</p></a>
        <p>Comment: {comment.text}</p>
        <p>Commented on: {dateFormatter(comment.createdAt)}</p>
        <p>Commenter: {comment.authorName}</p>
      </li>)}
    </ul>
  )
}

export default PostCommentsList;