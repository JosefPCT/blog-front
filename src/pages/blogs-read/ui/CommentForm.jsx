import { useActionState, useState } from "react";

import postCreateComment from "../api/postCreateComment";


async function postCommentAction(publicPostId, setIsNewComment, prevState, formData){
  console.log("post comment action...");
  console.log(publicPostId);
  const text = formData.get("text");
  await postCreateComment(publicPostId, text);
  setIsNewComment(true);
}

const CommentForm = ( {publicPostId, setIsNewComment}) => {


  console.log("Comment form....");


  const bindedAction = postCommentAction.bind(null, publicPostId, setIsNewComment)
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