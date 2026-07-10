import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import PostCommentsList from "./PostCommentsList";
import CreateCommentSection from "./CreateCommentSection";
import CommentSorting from "./CommentSorting";

import fetchPostComments from "../api/fetchPostComments";

export default function CommentSection( {publicId}){
  const [isNewComment, setIsNewComment] = useState(false);

  const { isPending, isError, data, error} = useQuery({
    queryKey: ['specificPostComments', isNewComment],
    queryFn: () => fetchPostComments(publicId, setIsNewComment)
  })

  return(
    <section>
      <CreateCommentSection publicId={publicId} setIsNewComment={setIsNewComment} />
      <h3>All Comments {data && data.length} </h3>
      <CommentSorting />
      <PostCommentsList isPending={isPending} isError={isError} data={data} error={error} />
    </section>
  )
}