import { useParams } from "react-router";

const SpecificPost = () => {
  const { publicId, postSlug } = useParams();

  return(
    <>
      <p>Individual Post Page</p>
      <p>{publicId}</p>
      <p>{postSlug}</p>
    </>
  )
}

export default SpecificPost;