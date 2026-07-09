import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

import { fetchAllPosts } from "../../../shared/api";
import { createRange } from "../lib/createRange";

import styles from "./PaginationLinks.module.css";

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

    // Test variables 
    // let testPagesArr = [1,5,6,7,10];
    const start = page - 2;
    const end = page + 2;
    console.log(start);
    console.log(end);
    // let testNumberPages = 10;
    let testPagesArr = createRange(start, end);
    console.log(testPagesArr);
    testPagesArr.unshift(1)
    console.log(testPagesArr);
    testPagesArr.push(Math.ceil(numberOfPages));
    console.log(testPagesArr);

    for(let i = 0; i < numberOfPages; i++){
      // if(i === 0 || i === numberOfPages - 1){
      if(testPagesArr.includes(i+1)) {
        pages.push(<li key={i}>
          <button onClick={() => {
            specificPageHandler(i+1);
            addQueryParam("page", i+1);
          }}
           disabled={ page === i + 1} className={ page === i + 1 ? `${styles.paginationBtn} ${styles.isActive}` : `${styles.paginationBtn}`}
          >{i+1}</button>
        </li>)
      } else {
        pages.push(<li key={i}><span className={styles.paginationEllipsis}>&hellip;</span></li>)
      }
    }
    
    return <>{pages}</>
  }

  if (isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <span>Error: {error.message}</span>
  }
    
  return(
    <div className={styles.paginationSection} aria-label="Pagination Navigation">
        {/* Page Setter: {page} */}
        <nav className={styles.modernPagination}>
          <ul className={styles.paginationList}>
            <li>
              <button onClick={() => {
              prevPageHandler();
              addQueryParam("page", page - 1);
              }} disabled={page === 1} className={`${styles.paginationBtn} ${styles.ctrlBtn}`} aria-label="Previous Page">
              <svg xmlns="http://w3.org" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
              </button>
            </li>

              {/* <div className={styles.pagination}> */}
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
              {/* </div> */}

            <li>
              <button onClick={() => {
                nextPageHandler();
                addQueryParam("page", page + 1);
                }} disabled={Array.isArray(data) && data.length === 0} className={`${styles.paginationBtn} ${styles.ctrlBtn}`} aria-label="Next page">
                <svg xmlns="http://w3.org" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
              </button>
            </li>
          </ul>
        </nav>
    </div>
  )
}