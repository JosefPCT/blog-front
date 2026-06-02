import { Link } from "react-router";

import CommentForm from "./CommentForm";
import { useAuth } from "../../../entities/user";
import { useLocation } from "react-router";

const CreateCommentSection = ({publicId, setIsNewComment}) => {
  const { isAuth } = useAuth();
  const url = useLocation();


  return(
    <div>
      {isAuth ? <CommentForm publicPostId={publicId} setIsNewComment={setIsNewComment} /> : <span>You need to <Link to={`/sign-in?prevUrl=${url.pathname}`}>login</Link> to post a comment.</span> }
      <p></p>
    </div>
  )
}

export default CreateCommentSection;