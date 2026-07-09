// Subcomponent that handles showing the posts that passes the filter criteria from the search query which by default shows all available posts,
import { useQuery } from "@tanstack/react-query";

import { fetchAllPosts } from "../../../shared/api";
import { CardWrapper } from "../../../shared/ui";
import AllPostsListItem from "./AllPostsListItem";

import styles from "./AllPostsList.module.css";

const AllPostsList = ( { defaultQuery, limitBy }) => {
  // const category = searchParams.get("category") || "";
  // const value = searchParams.get("value") || "";
  // const urlQuery = "?sort=+createdAt";
  // const urlQuery = `?${category}=${value}`;
  // const urlQuery = searchParams.has("category") && searchParams.has("value") ? `?${category}=${value}` : `?sort=+createdAt&page=${page}`;

  // Using `useLocation` instead of useSearchParams
  // const location = useLocation();
  // let searchQuery = location.search;

  //Checks if there's no search query adds default query
  // searchQuery = searchQuery ? searchQuery : `?sort=+createdAt&page=${page}`;

  // NOTE: If you want to additional query to show in the url, use setSearchParams to add them instead of concatenating, use functional update to not delete the already set queries
  // const finalQuery = rawQuery ? rawQuery + `&page=${page}` : `?sort=+createdAt&page=${page}`;
  // searchQuery ? addQueryParam("page", page) : addQueryParam();
  // if(searchQuery !== null){
  //   addQueryParam("page", page);
  // } else {
  //   addQueryParam("sort", "+createdAt");
  //   addQueryParam("page", page);
  // }



  // addQueryParam("page", page);


  // let query = "?sort=+createdAt";
  // query = searchParams.has("title") &&  searchParams.has("value") ? query + `title=${value}` : "";

  // console.log("Test");
  // console.log(searchParams.get("category"));

  // console.log("Category");
  // console.log(category)
  // console.log("Value:");
  // console.log(value);

  // Fetches data using either the default query of showing all posts or if there is a search query available, passes that instead 
  const { isPending, isError, data, error }= useQuery({
    queryKey: ['allPosts', defaultQuery],
    queryFn: () => fetchAllPosts(defaultQuery, limitBy),
  });

  if (isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <span>Error: {error.message}</span>
  }

  // Checks first if data is an array to avoid errors
  return (
    <ul className={styles.list}>
      {Array.isArray(data) && data.map((post) =>
      <CardWrapper>
        <AllPostsListItem post={post} />
      </CardWrapper> 
    )}
    </ul>
  )
}

export default AllPostsList;