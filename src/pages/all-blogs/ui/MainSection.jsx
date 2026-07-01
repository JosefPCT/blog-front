// import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

// import { fetchAllPosts } from "../../../shared/api";
import AllPostsList from "./AllPostsList";
import Results from "./Results";

export default function MainSection( {page}){

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

  return(
    <section>
        Main Section
        <Results resultsQuery={resultsQuery} page={page} limitBy={limitBy}/>
        <AllPostsList page={page} defaultQuery={defaultQuery} limitBy={limitBy} />
    </section>
  )
}