// import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

// import { fetchAllPosts } from "../../../shared/api";
import AllPostsList from "./AllPostsList";
import Results from "./Results";
import SortingDropDown from "./SortingDropdown";
import PageSetterSection from "./PageSetterSection";

export default function MainSection( {page, setPage, setSearchParams, }){

  // Define how many results per page
  const limitBy = 2;

  // Using `useLocation` instead of useSearchParams
  const location = useLocation();
  let searchQuery = location.search;
 
  //Checks if there's no search query adds default query
  const defaultQuery = searchQuery ? searchQuery : `?sort=+createdAt&page=${page}`;
  const resultsQuery = searchQuery.replace(`page=${page}`, 'null');


  // Main fetch that gets all posts based on the query
  // const { isPending, isError, data, error }= useQuery({
  //   queryKey: ['allPosts', searchQuery],
  //   queryFn: () => fetchAllPosts(searchQuery),
  // });

  const prevPageHandler = () => {
    setPage(prev => prev - 1);
  }

  const nextPageHandler = () => {
    setPage(prev => prev + 1);
  }

  const addQueryParam = (key, value) => {
    setSearchParams(prevParams => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set(key, value);
      return newParams;
    });
  };

  return(
    <section>
        Main Section
        <Results resultsQuery={resultsQuery} page={page} limitBy={limitBy}/>
        <SortingDropDown addQueryParam={addQueryParam} />
        <AllPostsList page={page} defaultQuery={defaultQuery} limitBy={limitBy} />
        <PageSetterSection page={page} nextPageHandler={nextPageHandler} prevPageHandler={prevPageHandler} addQueryParam={addQueryParam} limitBy={limitBy}/>
    </section>
  )
}