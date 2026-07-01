import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

import { fetchAllPosts } from "../../../shared/api";
import AllPostsList from "./AllPostsList";

export default function MainSection( {page}){
  // Using `useLocation` instead of useSearchParams
  const location = useLocation();
  let searchQuery = location.search;

  //Checks if there's no search query adds default query
  searchQuery = searchQuery ? searchQuery : `?sort=+createdAt&page=${page}`;

  // Main fetch that gets all posts based on the query
  const { isPending, isError, data, error }= useQuery({
    queryKey: ['allPosts', searchQuery],
    queryFn: () => fetchAllPosts(searchQuery),
  });

  return(
    <section>
        Main Section
        <AllPostsList isPending={isPending} isError={isError} data={data} error={error} />
    </section>
  )
}