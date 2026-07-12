// Parent component for the main content of the post
import PostContent from "./PostContent"

export default function MainSection( {publicId, postSlug}){
  return(
    <section>
        <PostContent publicId={publicId} postSlug={postSlug} />
    </section>
  )
}