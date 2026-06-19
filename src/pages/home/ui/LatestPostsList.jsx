import { useQuery } from "@tanstack/react-query";

import LatestPostListItem from "./LatestPostListItem";
import fetchAllPosts from "../../../shared/api/fetchAllPosts";

import styles from "./LatestPostsList.module.css";

const LatestPostsList = ({limit}) => {
  const urlQuery = "";

  const { isPending, isError, data, error }= useQuery({
    queryKey: ['latestPosts'],
    queryFn: () => fetchAllPosts(urlQuery),
  });

  if (isPending){
    return <span>Loading...</span>
  }

  if (isError){
    return <span>Error: {error.message} </span>
  }
  return(
    <ul className={styles.noStyle}>
      {data.map((post, index) => 
        <LatestPostListItem key={post.publicId} post={post} index={index} limit={limit} />
      )}
    </ul>
  )
}

export default LatestPostsList;