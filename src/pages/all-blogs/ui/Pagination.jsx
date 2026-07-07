import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

import { fetchAllPosts } from "../../../shared/api";

import styles from "./Pagination.module.css";

// Page Setter Section that disabled and enables next page and previous page buttons by querying the next page (page + 1) if its empty or not
export default function Pagination({ page, nextPageHandler, prevPageHandler, specificPageHandler, addQueryParam, totalResults, limitBy }){
  const location = useLocation();
  let searchQuery = location.search;
  let nextPageQuery = searchQuery.replace(`page=${page}`, `page=${page + 1}`);

  // Instead of Math.floor to round down, we can use Math.ciel to round up
  const numberOfPages = totalResults % limitBy === 0 ? totalResults / limitBy :  Math.floor((totalResults / limitBy)) + 1;


  const { isPending, isError, data, error }= useQuery({
    queryKey: ['checkNextPosts', nextPageQuery],
    queryFn: () => fetchAllPosts(nextPageQuery, limitBy),
  });

  function Pages(){
    const pages = [];

    let testPagesArr = [1,5,6,7,10];
    // let testNumberPages = 10;
    let numberOfPages = 10;

    for(let i = 0; i < numberOfPages; i++){
      // if(i === 0 || i === numberOfPages - 1){
      if(testPagesArr.includes(i+1)) {
        pages.push(<li key={i}>
          <button onClick={() => {
            specificPageHandler(i+1);
            addQueryParam("page", i+1);
          }}
           disabled={ page === i + 1}
          >{i+1}</button>
        </li>)
      } else {
        pages.push(<li key={i}>...</li>)
      }
    }
    
    return <ul>{pages}</ul>
  }

  if (isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <span>Error: {error.message}</span>
  }
    
  return(
    <div className={styles.paginationSection}>
        {/* Page Setter: {page} */}
        <button onClick={() => {
          prevPageHandler();
          addQueryParam("page", page - 1);
        }} disabled={page === 1}>
          Prev
        </button>

        <div className={styles.pagination}>
          {Pages()}
          {/* <ul>
            {Array.from({ length: numberOfPages}, (_, i) => (
              <li key={i}>
                <button onClick={() => {
                  specificPageHandler(i+1);
                  addQueryParam("page", i+1);
                }}
                disabled={ page === i + 1}
                >{i+1}</button>
              </li>
            ))}
          </ul> */}
        </div>

        <button onClick={() => {
          nextPageHandler();
          addQueryParam("page", page + 1);
        }} disabled={Array.isArray(data) && data.length === 0}>
          Next
        </button>
    </div>
  )
}