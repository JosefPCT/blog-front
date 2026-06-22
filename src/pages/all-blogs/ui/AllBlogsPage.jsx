import { useSearchParams } from "react-router";

import AllPostsList from "./AllPostsList";
import SearchBox from "./SearchBox";



const AllBlogsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <h1>All Blogs</h1>
      <SearchBox searchParams={searchParams} setSearchParams={setSearchParams} />
      <AllPostsList searchParams={searchParams} setSearchParams={setSearchParams} />
    </>
  )
}

export default AllBlogsPage;