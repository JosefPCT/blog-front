// Main Component for the `blogs-read` layer, entry point
// Gets the public id of the post from the url using useParams() and passes it as props

import { useParams } from "react-router";

import MainSection from "./MainSection";
import CommentSection from "./CommentSection";

const SpecificPostPage = () => {
  const { publicId, postSlug } = useParams();
  return(
    <>
      <MainSection publicId={publicId} postSlug={postSlug} />
      <CommentSection publicId={publicId} />
    </>
  )
}

export default SpecificPostPage;