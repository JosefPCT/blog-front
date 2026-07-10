import PostCommentsList from "./PostCommentsList";
import CreateCommentSection from "./CreateCommentSection";

export default function CommentSection( {publicId, isNewComment, setIsNewComment}){
  return(
    <section>
      <CreateCommentSection publicId={publicId} setIsNewComment={setIsNewComment} />
      <h3>List of Comments</h3>
      <PostCommentsList postPublicId={publicId} isNewComment={isNewComment} setIsNewComment={setIsNewComment} />
    </section>
  )
}