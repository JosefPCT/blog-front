import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

import { fetchAllPosts } from "../../../shared/api";
import AllPostsList from "./AllPostsList";
import Results from "./Results";
import SortingDropDown from "./SortingDropdown";
// import Pagination from "./Pagination";
import Pagination from "./PaginationLinks";


import styles from "./MainSection.module.css";

export default function MainSection( {page, setPage, setSearchParams, }){

  // Define how many results per page
  const limitBy = 3;

  // Using `useLocation` instead of useSearchParams
  const location = useLocation();
  let searchQuery = location.search;
 
  //Checks if there's no search query adds default query
  const defaultQuery = searchQuery ? searchQuery : `?sort=+createdAt&page=${page}`;


  const allResultsQuery = searchQuery.replace(`page=${page}`, '');

    // Fetch all results without limit
  const { isPending, isError, data, error }= useQuery({
      queryKey: ['allResults', allResultsQuery],
      queryFn: () => fetchAllPosts(allResultsQuery, null),
    });

  const totalResults = data && data.length;

  const prevPageHandler = () => {
    setPage(prev => prev - 1);
  }

  const nextPageHandler = () => {
    setPage(prev => prev + 1);
  }

  const specificPageHandler = (num) => {
    setPage(prev => num)
  }

  const addQueryParam = (key, value) => {
    setSearchParams(prevParams => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set(key, value);
      return newParams;
    });
  };

  return(
    <section className={styles.section}>
        <div className={styles.mainHeader}>
          <Results isPending={isPending} isError={isError} totalResults={totalResults} error={error} page={page} limitBy={limitBy} />
          <SortingDropDown addQueryParam={addQueryParam} />
        </div>
        <AllPostsList page={page} defaultQuery={defaultQuery} limitBy={limitBy} />
        <div className={styles.mainFooter}> 
          <Pagination page={page} nextPageHandler={nextPageHandler} prevPageHandler={prevPageHandler} specificPageHandler={specificPageHandler} addQueryParam={addQueryParam} totalResults={totalResults} limitBy={limitBy}/>
        </div>
    </section>
  )
}