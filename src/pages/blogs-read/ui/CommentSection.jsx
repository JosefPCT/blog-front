import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import PostCommentsList from "./PostCommentsList";
import CreateCommentSection from "./CreateCommentSection";
import CommentSorting from "./CommentSorting";

import fetchPostComments from "../api/fetchPostComments";

export default function CommentSection( {publicId}){
  const [isNewComment, setIsNewComment] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("Window location:");
  console.log(window.location.search);
  console.log(!window.location.search);
  const searchQuery = !window.location.search ? "?sort=-createdAt" : window.location.search;
  console.log("Search query:");
  console.log(searchQuery);

  const { isPending, isError, data, error} = useQuery({
    queryKey: ['specificPostComments', isNewComment, searchQuery],
    queryFn: () => fetchPostComments(publicId, setIsNewComment, searchQuery)
  })

  return(
    <section>
      <CreateCommentSection publicId={publicId} setIsNewComment={setIsNewComment} />
      <h3>All Comments {data && data.length} </h3>
      <CommentSorting setSearchParams={setSearchParams}/>
      <PostCommentsList isPending={isPending} isError={isError} data={data} error={error} />
    </section>
  )
}