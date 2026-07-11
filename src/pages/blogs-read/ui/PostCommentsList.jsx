import PostCommentsListItem from "./PostCommentsListItem";

import { useUser } from "../../../entities/user";

import styles from "./PostCommentsList.module.css";

const PostCommentsList = ( {isPending, isError, data, error} ) => {
  const { user } = useUser();

  console.log(user);
  // console.log(user.liked_comments);  

  // const alreadyLiked = (targetCommentPublicId) => {
  //   if(user.liked_comments){
  //     return user.liked_comments.some(likedComment => likedComment.publicId === targetCommentPublicId);
  //   }
  // }

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