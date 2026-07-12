// Component that handles iterating through the data fetched into a list of items
// Also handles sending a prop called 'liked' which checks if a comment is already liked by the current user, via the .some() function that returns true or false
// Also sends in the individual comment data as prop and the current user's id to its children

import PostCommentsListItem from "./PostCommentsListItem";

import { useUser } from "../../../entities/user";

import styles from "./PostCommentsList.module.css";

const PostCommentsList = ( {isPending, isError, data, error} ) => {
  const { user } = useUser();

  if(isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <span>Error: {error.message }</span>
  }

  return(
    <ul className={styles.listContainer}>
      {data.map((comment) =>
       <PostCommentsListItem key={comment.publicId} comment={comment} liked={ user ? user.liked_comments.some(likedComment => likedComment.publicId === comment.publicId): false} userId={user ? user.id : ""} />
      )}
    </ul>
  )
}

export default PostCommentsList;