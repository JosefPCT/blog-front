import { useParams } from "react-router";
import PostContent from "./PostContent";
import PostCommentsList from "./PostCommentsList";
import CreateCommentSection from "./CreateCommentSection";


const SpecificPostPage = () => {
  const { publicId, postSlug } = useParams();
  return(
    <>
      <PostContent publicId={publicId} postSlug={postSlug} />
      <CreateCommentSection />
      <h3>List of Comments</h3>
      <PostCommentsList postPublicId={publicId} />
    </>
  )
}

export default SpecificPostPage;