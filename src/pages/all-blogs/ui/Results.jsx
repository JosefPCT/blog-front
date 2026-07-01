import { useQuery } from "@tanstack/react-query";

import { fetchAllPosts } from "../../../shared/api";

export default function Results( { resultsQuery, page, limitBy } ){

//   let replacedQuery = replacedQuery.replace(`page=${page}`, `page=${page + 1}`);

  const { isPending, isError, data, error }= useQuery({
    queryKey: ['results', resultsQuery],
    queryFn: () => fetchAllPosts(resultsQuery, null),
  });

  const totalResults = data && data.length;
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
      <h3>{firstNumber} - {lastNumber} of {data && data.length} total results</h3>
    </div>
  ) 
}