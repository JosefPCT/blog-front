import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

import { fetchAllPosts } from "../../../shared/api";

// Page Setter Section that disabled and enables next page and previous page buttons by querying the next page (page + 1) if its empty or not
export default function PageSetterSection({ page, nextPageHandler, prevPageHandler, addQueryParam, limitBy }){
  const location = useLocation();
  let searchQuery = location.search;
  let replacedQuery = searchQuery.replace(`page=${page}`, `page=${page + 1}`);

  const { isPending, isError, data, error }= useQuery({
    queryKey: ['checkNextPosts', replacedQuery],
    queryFn: () => fetchAllPosts(replacedQuery, limitBy),
  });

  if (isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <span>Error: {error.message}</span>
  }
    
  return(
    <div>
        Page Setter: {page}
        <button onClick={() => {
          prevPageHandler();
          addQueryParam("page", page - 1);
        }} disabled={page === 1}>
          Prev
        </button>
        <button onClick={() => {
          nextPageHandler();
          addQueryParam("page", page + 1);
        }} disabled={Array.isArray(data) && data.length === 0}>
          Next
        </button>
    </div>
  )
}