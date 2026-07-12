// Parent component for all things related to the comment section of the post's page
// Houses the fetching logic on getting the comments of the post using Tanstack Query, which automatically refetches when a different search query is requested, or when the query is invalidated such as liking a comment or adding a new comment
// Creates state for `useSearchParams()`
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import PostCommentsList from "./PostCommentsList";
import CreateCommentSection from "./CreateCommentSection";
import CommentSorting from "./CommentSorting";

import fetchPostComments from "../api/fetchPostComments";

import styles from "./CommentSection.module.css";

export default function CommentSection( {publicId}){
  
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = !window.location.search ? "?sort=-createdAt" : window.location.search;

  const { isPending, isError, data, error} = useQuery({
    queryKey: ['specificPostComments', searchQuery],
    queryFn: () => fetchPostComments(publicId, searchQuery)
  })

  return(
    <section>
      <CreateCommentSection publicId={publicId} />
      <div className={styles.commentSectionHeading}>
        <h3>All Comments <span className={styles.allCommentsResults}>{data && data.length}</span> </h3>
        <CommentSorting setSearchParams={setSearchParams}/>
      </div>
      <PostCommentsList isPending={isPending} isError={isError} data={data} error={error}/>
    </section>
  )
}