import { useState } from "react";
import { useParams } from "react-router";

import MainSection from "./MainSection";
import CommentSection from "./CommentSection";

const SpecificPostPage = () => {
  const { publicId, postSlug } = useParams();
  const [isNewComment, setIsNewComment] = useState(false);
  return(
    <>
      <MainSection publicId={publicId} postSlug={postSlug} />
      <CommentSection publicId={publicId} isNewComment={isNewComment} setIsNewComment={setIsNewComment}/>
    </>
  )
}

export default SpecificPostPage;