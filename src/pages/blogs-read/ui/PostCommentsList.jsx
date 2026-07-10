import PostCommentsListItem from "./PostCommentsListItem";

import styles from "./PostCommentsList.module.css";

const PostCommentsList = ( {isPending, isError, data, error} ) => {

  if(isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <span>Error: {error.message }</span>
  }

  return(
    <ul className={styles.listContainer}>
      {data.map((comment) => 
       <PostCommentsListItem key={comment.publicId} comment={comment}/>
      )}
    </ul>
  )
}

export default PostCommentsList;