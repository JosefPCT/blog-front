// Component that handles the actual rendering of individual comment's data, such as the avatar profile, author's name etc.
// Has a state that toggles between true or false to trigger rendering of the other if a user liked a comment without waiting for the refetch
// Uses useMutate to handle refetch when liking a comment (Alternative to just calling invalidateQueries raw)
// Renders a like icon svg with different `data-name`  attribute (likedComment or dislikedComment) depending if the comment is already liked or not 
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { useAuth } from "../../../entities/user";
import { CardWrapper } from "../../../shared/ui";
import { dateFormatter } from "../../../shared/lib";

import updateUserLikedComment from "../api/updateUserLikedComment";

import styles from "./PostCommentsListItem.module.css";

const PostCommentsListItem = ({comment, liked, userId}) => {
  const [commentLiked, setCommentLiked] = useState(liked);
  
  const queryClient = useQueryClient();
  const { isAuth }= useAuth();

  // The mutate function from Tanstack Query, only accepts a single object as argument, so you must send in an object with multiple keys, if multiple arguments is needed
  const mutation = useMutation({
    mutationFn: async ({ commentPublicId, fieldName}) => {
      await updateUserLikedComment(userId, commentPublicId, fieldName)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['specificPostComments']})
    }
  })

  // Event handler when clicking the like icon to like/dislike a comment
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
      commentPublicId: e.currentTarget.dataset.id,
      fieldName: e.currentTarget.dataset.name
    })
    if(isAuth){
      setCommentLiked(prev => !prev);
    }
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
            <div className={styles.contentWrapper}>
              <div className={styles.headingContainer}>
                <span className={styles.commenterName}>{comment.authorName}</span>
                <span>&#x25CF;</span>
                <span className={styles.contentDate}>{dateFormatter(comment.createdAt)}</span>
              </div>
              {/* <a href={`/posts/${comment.publicId}/comments/${comment.publicId}/${comment.text}`}><p>{comment.text}</p></a> */}
              <div className={styles.bodyContainer}>
                <p className={styles.commentMainBody}>{comment.text}</p>
              </div>
              <div className={styles.actionContainer}>
                <div className={styles.likeIconContainer}>
                    {commentLiked ? 
                      <a href="#" onClick={onClickHandler} data-name="dislikedComment" data-id={comment.publicId}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="skyblue" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        {/* <span>Liked Comment</span> */}
                      </a> :
                      <a href="#" onClick={onClickHandler} data-name="likedComment" data-id={comment.publicId}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                      {/* <span>Not Liked Comment</span> */}
                    </a>
                    }           
                </div>
                <div>
                  {comment.likes}
                </div>      
              </div>
            </div>
         </CardWrapper>
        </div>
    </li>
  )
}

export default PostCommentsListItem;