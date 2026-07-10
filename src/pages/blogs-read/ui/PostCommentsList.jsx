import PostCommentsListItem from "./PostCommentsListItem";

const PostCommentsList = ( {isPending, isError, data, error} ) => {

  if(isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <span>Error: {error.message }</span>
  }

  return(
    <ul>
      {data.map((comment) => 
       <PostCommentsListItem key={comment.publicId} comment={comment}/>
      )}
    </ul>
  )
}

export default PostCommentsList;