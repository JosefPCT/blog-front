import { useState } from "react";
import { useParams } from "react-router";

import PostContent from "./PostContent";
import PostCommentsList from "./PostCommentsList";
import CreateCommentSection from "./CreateCommentSection";


const SpecificPostPage = () => {
  const { publicId, postSlug } = useParams();
  const [isNewComment, setIsNewComment] = useState(false);
  return(
    <>
      <PostContent publicId={publicId} postSlug={postSlug} />
      <CreateCommentSection publicId={publicId} setIsNewComment={setIsNewComment} />
      <h3>List of Comments</h3>
      <PostCommentsList postPublicId={publicId} isNewComment={isNewComment} setIsNewComment={setIsNewComment} />
    </>
  )
}

export default SpecificPostPage;