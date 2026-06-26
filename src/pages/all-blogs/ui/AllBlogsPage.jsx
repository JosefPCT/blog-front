import { useSearchParams } from "react-router";

import AllPostsList from "./AllPostsList";
import SearchBox from "./SearchBox";
import SearchBoxControlled from "./SearchBoxControlled";



const AllBlogsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <h1>All Blogs</h1>
      <SearchBoxControlled searchParams={searchParams} setSearchParams={setSearchParams} />
      <AllPostsList searchParams={searchParams} setSearchParams={setSearchParams} />
    </>
  )
}

export default AllBlogsPage;