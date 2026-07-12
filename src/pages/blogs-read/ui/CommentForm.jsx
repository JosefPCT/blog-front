// Component that renders the actual comment form
// Uses a mix of React 19 and the new 'action' attribute to directly attach the function to be called on when a form is submitted
// Uses useQueryClient to call on invalidateQueries when adding a new comment is successful to trigger a refetch on the specific query
import { useActionState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import postCreateComment from "../api/postCreateComment";


// The action function that will be called upon, Uses the .bind() technique to pass on additional arguments to the action function
async function postCommentAction(publicPostId, queryClient, prevState, formData){
  console.log("post comment action...");
  console.log(publicPostId);

  const text = formData.get("text");
  await postCreateComment(publicPostId, text);

  // Either use the state setter to check if there's a new comment or if using Tanstack Query, use `queryClient.invalidateQueries` and pass on the query key you want to invalidate and refetch
  queryClient.invalidateQueries({ queryKey: ['specificPostComments']});
}

const CommentForm = ( {publicPostId} ) => {
  const queryClient = useQueryClient();

  console.log("Comment form....");

  const bindedAction = postCommentAction.bind(null, publicPostId, queryClient)
  const [_, formAction, isPending] = useActionState(bindedAction, null);
  
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

        <button type="submit" disabled={isPending}>Post Comment</button>
    </form>
  )
}

export default CommentForm;