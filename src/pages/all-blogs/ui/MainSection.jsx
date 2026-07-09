// Subcomponent that houses subcomponents needed for the Main Section which are, a total results component, a sorting dropdown/select, the list of posts that matches the filter criteria, shows all posts by default, and the pagination buttons
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

import { fetchAllPosts } from "../../../shared/api";
import AllPostsList from "./AllPostsList";
import Results from "./Results";
import SortingDropDown from "./SortingDropdown";
import Pagination from "./Pagination";

import styles from "./MainSection.module.css";

export default function MainSection( {page, setPage, setSearchParams, }){

  // Define how many results per page
  const limitBy = 3;

  // Using `useLocation` instead of useSearchParams
  const location = useLocation();
  let searchQuery = location.search;
 
  //Checks if there's no search query adds default query, to be used by AllPostsList to fetch data depending of the page query
  const defaultQuery = searchQuery ? searchQuery : `?sort=+createdAt&page=${page}`;

  // Customizes the search query that replaces the page query to nothing, so that the Results component can calculate the total results 
  const allResultsQuery = searchQuery.replace(`page=${page}`, '');

  // Fetch all results without limit
  const { isPending, isError, data, error }= useQuery({
      queryKey: ['allResults', allResultsQuery],
      queryFn: () => fetchAllPosts(allResultsQuery, null),
    });

  // Gets the total results of the fetching without limit and stores as a number, to be used by Results component
  const totalResults = data && data.length;

  // Handlers for pagination that sets the `page` state
  // Defined here so we don't need to pass on `setPage` on the child component
  const prevPageHandler = () => {
    setPage(prev => prev - 1);
  }

  const nextPageHandler = () => {
    setPage(prev => prev + 1);
  }

  const specificPageHandler = (num) => {
    setPage(num)
  }

  // A helper function that creates/replaces a query key and its value, uses setSearchParams
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