import { useQuery } from "@tanstack/react-query";
import fetchPostComments from "../api/fetchPostComments";
import PostCommentsListItem from "./PostCommentsListItem";

const PostCommentsList = ({postPublicId, isNewComment, setIsNewComment}) => {
  const { isPending, isError, data, error} = useQuery({
    queryKey: ['specificPostComments', isNewComment],
    queryFn: () => fetchPostComments(postPublicId, setIsNewComment)
  })

  if(isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <span>Error: {error.message }</span>
  }

  return(
    <ul>
      {data.length}
      {data.map((comment) => 
       <PostCommentsListItem key={comment.publicId} comment={comment}/>
      )}
    </ul>
  )
}

export default PostCommentsList;