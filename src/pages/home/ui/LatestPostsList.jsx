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

  const visiblePosts = data.slice(0, limit);

  return(
    <ul className={styles.noStyle}>
      {data && visiblePosts.map((post) => 
        <LatestPostListItem key={post.publicId} post={post} />
      )}
    </ul>
  )
}

export default LatestPostsList;