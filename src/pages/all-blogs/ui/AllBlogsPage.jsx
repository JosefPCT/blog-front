// Main Component that houses all components needed for the AllBlogsPage
// Sets up needed states to pass on to children as props such as page and searchParams (for search query url)
import { useSearchParams } from "react-router";
import { useState } from "react";

import MainSection from "./MainSection";
import SearchBoxControlled from "./SearchBoxControlled";
// import SearchBox from "./SearchBox";

const AllBlogsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  return (
    <div>
      <h1>Search An Article</h1>
      <SearchBoxControlled setSearchParams={setSearchParams} setPage={setPage} />
      <MainSection setSearchParams={setSearchParams} page={page} setPage={setPage} />
    </div>
  )
}

export default AllBlogsPage;