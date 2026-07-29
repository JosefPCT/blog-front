// Subcomponent that handles rendering of the post content
// Uses Tanstack query to fetch data based on the url's public id

import { useQuery } from "@tanstack/react-query";
import fetchSpecificPost from "../api/fetchSpecificPost";
import { dateFormatter } from "../../../shared/lib";

import styles from "./PostContent.module.css";

const PostContent = ({ publicId, postSlug }) => {
  const { isPending, isError, data, error} = useQuery({
    queryKey: ['specificPost'],
    queryFn: () => fetchSpecificPost(publicId)
  })

  console.log(data);

  if (isPending){
    return <span>Loading...</span>
  }

  if (isError){
    return <span>Error: {error.message} </span>
  }

  return(
    <>
      <h1>{data.title}</h1>
      <div className={styles.subheadingContainer}>
        <span>{data.authorName}</span>
        <span>Tag</span>
        <span>7 min read</span>
        <span>{dateFormatter(data.createdAt)}</span>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Article Photo" />
      </div>
      {/* <p>{publicId}</p> */}
      {/* <p>{postSlug}</p> */}
      <div className={styles.bodyContainer}>
        <p dangerouslySetInnerHTML={{__html: data.text}}></p>
      </div>
    </>
  )
}

export default PostContent;