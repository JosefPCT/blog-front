import { useSearchParams } from "react-router";
import { useState } from "react";

import MainSection from "./MainSection";
import SearchBox from "./SearchBox";
import SearchBoxControlled from "./SearchBoxControlled";



const AllBlogsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  return (
    <>
      <h1>All Blogs</h1>
      <SearchBoxControlled setSearchParams={setSearchParams} page={page} setPage={setPage} />

      <MainSection page={page} setPage={setPage} setSearchParams={setSearchParams} />
      
    </>
  )
}

export default AllBlogsPage;