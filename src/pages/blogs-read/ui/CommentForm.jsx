import { useActionState, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import postCreateComment from "../api/postCreateComment";


async function postCommentAction(publicPostId, setIsNewComment, queryClient, prevState, formData){
  console.log("post comment action...");
  console.log(publicPostId);
  const text = formData.get("text");
  await postCreateComment(publicPostId, text);
  // Either use the state setter to check if there's a new comment or if using Tanstack Query, use `queryClient.invalidateQueries` and pass on the query key you want to invalidate and refetch
  // setIsNewComment(true);
  queryClient.invalidateQueries({ queryKey: ['specificPostComments']});
}

const CommentForm = ( {publicPostId, setIsNewComment}) => {
  const queryClient = useQueryClient();

  console.log("Comment form....");


  const bindedAction = postCommentAction.bind(null, publicPostId, setIsNewComment, queryClient)
  const [state, formAction, isPending] = useActionState(bindedAction, null);
  

  return(
    <form action={formAction}>
        <h1>Comment Form</h1>
        <textarea 
          name="text" 
          id="text" 
          minLength={5}
          maxLength={1000}
          style={{
            minHeight: '100px',
            maxHeight: '300px',
            resize: 'vertical',
            width: '100%'
          }}
          >
        </textarea>

        <button type="submit">Post Comment</button>
    </form>
  )
}

export default CommentForm;