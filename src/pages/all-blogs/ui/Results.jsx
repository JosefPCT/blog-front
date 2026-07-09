// Subcomponent that renders a heading that shows which current results range is the user being shown and also shows the total results

export default function Results( { isPending, isError, totalResults, error, page, limitBy } ){

  // const resultsQuery = searchQuery.replace(`page=${page}`, 'null');

  // Calculates the range of the first number based on the page number using the `page` state and `limitBy` variable, displays 0 if no results
  const firstNumber = totalResults !== 0 ? (page * limitBy) - limitBy + 1 : 0;

  // Calculates the range of the last number based on the page number using the `page` state and `limitBy` variable, display the number of `totalResults` instead if last number exceeds the total results
  const lastNumber = totalResults < (page * limitBy) ? totalResults : page * limitBy;
  
  if (isPending){
    return <span>Loading...</span>
  }

  if(isError){
    return <span>Error: {error.message}</span>
  }

  return(
    <div>
      <h3> Showing {firstNumber} - {lastNumber} of {totalResults}</h3>
    </div>
  ) 
}