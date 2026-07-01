import { useSearchParams } from "react-router";
import { useState } from "react";

import MainSection from "./MainSection";
import AllPostsList from "./AllPostsList";
import SearchBox from "./SearchBox";
import SearchBoxControlled from "./SearchBoxControlled";
import PageSetterSection from "./PageSetterSection";
import SortingDropDown from "./SortingDropdown";


const AllBlogsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const prevPageHandler = () => {
    setPage(prev => prev - 1);
  }

  const nextPageHandler = () => {
    setPage(prev => prev + 1);
  }

  const addQueryParam = (key, value) => {
    setSearchParams(prevParams => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set(key, value);
      return newParams;
    });
  };

  return (
    <>
      <h1>All Blogs</h1>
      <SearchBoxControlled setSearchParams={setSearchParams} page={page} setPage={setPage} />

      <MainSection page={page} />
      <SortingDropDown addQueryParam={addQueryParam} />
      <PageSetterSection page={page} nextPageHandler={nextPageHandler} prevPageHandler={prevPageHandler} addQueryParam={addQueryParam} />
    </>
  )
}

export default AllBlogsPage;