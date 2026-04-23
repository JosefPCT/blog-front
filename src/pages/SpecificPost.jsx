import { useParams } from "react-router";
import Post from "../components/Post";

const SpecificPost = () => {
  const { publicId, postSlug } = useParams();
  return(
    <>
      <Post publicId={publicId} postSlug={postSlug} />
    </>
  )
}

export default SpecificPost;