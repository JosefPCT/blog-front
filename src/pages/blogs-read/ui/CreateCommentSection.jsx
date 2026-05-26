import { Link } from "react-router";

import CommentForm from "./CommentForm";
import { useAuth } from "../../../entities/user";

const CreateCommentSection = () => {
  const { isAuth } = useAuth();

  return(
    <div>
      {isAuth ? <CommentForm /> : <span>You need to <Link to='/sign-in'>login</Link> to post a comment.</span> }
    </div>
  )
}

export default CreateCommentSection;