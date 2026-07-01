// import { useQuery } from "@tanstack/react-query";

// import { fetchAllPosts } from "../../../shared/api";

export default function Results( { isPending, isError, totalResults, error, page, limitBy } ){

//    const resultsQuery = searchQuery.replace(`page=${page}`, 'null');


  const firstNumber = (page * limitBy) - limitBy + 1;
  const lastNumber = totalResults < (page * limitBy) ? totalResults : page * limitBy;
  
  if (isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <span>Error: {error.message}</span>
  }

  return(
    <div>
      <h3>{firstNumber} - {lastNumber} of {totalResults} total results</h3>
    </div>
  ) 
}