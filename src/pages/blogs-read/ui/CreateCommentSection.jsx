// Component that renders either the CommentForm component or a message that reminds the unauthorized user to login if they want to comment
// Uses isAuth from the useAuth Context Provider, to determine if the current user is authorized or not
import { Link } from "react-router";

import CommentForm from "./CommentForm";
import { useAuth } from "../../../entities/user";
import { useLocation } from "react-router";

const CreateCommentSection = ({publicId }) => {
  const { isAuth } = useAuth();
  const url = useLocation();
  
  return(
    <div>
      {isAuth ? <CommentForm publicPostId={publicId} /> : <span>You need to <Link to={`/sign-in?prevUrl=${url.pathname}`}>login</Link> to post a comment.</span> }
      <p></p>
    </div>
  )
}

export default CreateCommentSection;