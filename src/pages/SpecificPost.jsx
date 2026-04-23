import { useParams } from "react-router";
import Post from "../components/Post";
import PostComments from "../components/PostComments";

const SpecificPost = () => {
  const { publicId, postSlug } = useParams();
  return(
    <>
      <Post publicId={publicId} postSlug={postSlug} />
      <h3>List of Comments</h3>
      <PostComments postPublicId={publicId} />
    </>
  )
}

export default SpecificPost;