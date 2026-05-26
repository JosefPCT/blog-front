import { Link } from "react-router";

import CommentForm from "./CommentForm";
import { useAuth } from "../../../entities/user";
import { useLocation } from "react-router";

const CreateCommentSection = () => {
  const { isAuth } = useAuth();
  const url = useLocation();
  console.log("Showing url...");
  console.log(url.pathname);


  return(
    <div>
      {isAuth ? <CommentForm /> : <span>You need to <Link to={`/sign-in?prevUrl=${url.pathname}`}>login</Link> to post a comment.</span> }
      <p></p>
    </div>
  )
}

export default CreateCommentSection;