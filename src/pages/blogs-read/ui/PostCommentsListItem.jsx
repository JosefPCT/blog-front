import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { CardWrapper } from "../../../shared/ui";
import { dateFormatter } from "../../../shared/lib";



import updateUserLikedComment from "../api/updateUserLikedComment";

import styles from "./PostCommentsListItem.module.css";

const PostCommentsListItem = ({comment, liked, userId}) => {
  const [commentLiked, setCommentLiked] = useState(liked);
  
  const queryClient = useQueryClient();
  console.log("Already liked?")
  console.log(liked);
  // console.log("User");
  // console.log(user);
  // console.log("User's liked comments");
  // // console.log(user.liked_comments);
  // console.log("Comment current:");
  // console.log(comment);
  // console.log("Comment current public id:")
  // console.log(comment.publicId);

  
    // let liked;
    // console.log(user.liked_comments);
    // if(user.liked_comments){
    //   liked = user.liked_comments.some(likedComment => likedComment.publicId === comment.publicId);
    // }

    // user.liked_comments.some(likedCom => {
    //   console.log("Liked Comment public Id:")
    //   console.log(likedCom.publicId);
    //   console.log("Current comment public id;");
    //   console.log(comment.publicId);
    // });

    // console.log("liked?");
    // console.log(liked);
  
  // const alreadyLiked = (commentPublicId) => {
  //   if(user.liked_comments){
  //     user.liked_comments.some(likedCom => {
  //       console.log(("User's Liked Comment Publicid:"))
  //       console.log(likedCom.publicId);
  //       console.log("Target comment public id:");
  //       console.log(commentPublicId)
  //     })
  //   }
  // }

  const mutation = useMutation({
    mutationFn: async ({ userId, commentPublicId, fieldName}) => {
      await updateUserLikedComment(userId, commentPublicId, fieldName)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['specificPostComments']})
    }
  })

  

  const onClickHandler = async (e) => {
    e.preventDefault();
    if(!userId){
      console.log("You must be logged in to like");
    }
    console.log("Liked!");
    console.log(comment);
    console.log(e.currentTarget.id);
    console.log(e.currentTarget.dataset);

    // Normal way
    // await updateUserLikedComment(userId, e.currentTarget.dataset.id, e.currentTarget.dataset.name);
    // queryClient.refetchQueries( {queryKey: ['specificPostComments']} );
    
    // Using useMutate from tanstack query
    mutation.mutate({
      userId: userId,
      commentPublicId: e.currentTarget.dataset.id,
      fieldName: e.currentTarget.dataset.name
    })
    setCommentLiked(prev => !prev);
  }

  return(
    <li className={`${styles.noStyle} ${styles.listItemContainer}`}>
        <div className={styles.avatarContainer}>
          <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" fill="#f3f4f6" stroke="#e5e7eb" />
            <circle cx="12" cy="9" r="4" fill="#d1d5db" />
            <path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" fill="#d1d5db" />
          </svg>
        </div>
        <div className={styles.contentContainer}>
          <CardWrapper>
            {/* <p>Key: {comment.publicId}</p> */}
            <div className={styles.headingContainer}>
              <span>{comment.authorName}</span>
              <span>&#x25CF;</span>
              <span>{dateFormatter(comment.createdAt)}</span>
            </div>
            {/* <a href={`/posts/${comment.publicId}/comments/${comment.publicId}/${comment.text}`}><p>{comment.text}</p></a> */}
            <div className={styles.bodyContainer}>
              <p>{comment.text}</p>
            </div>
            <div className={styles.actionContainer}>
              <div>
                {comment.likes}
              </div>
              <div className={styles.likeIconContainer}>
                  {commentLiked ? 
                    <a href="#" onClick={onClickHandler} data-name="dislikedComment" data-id={comment.publicId}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      <span>Liked Comment</span>
                    </a> :
                    <a href="#" onClick={onClickHandler} data-name="likedComment" data-id={comment.publicId}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    <span>Not Liked Comment</span>
                  </a>
                  }           
              </div>      
            </div>
         </CardWrapper>
        </div>
    </li>
  )
}

export default PostCommentsListItem;