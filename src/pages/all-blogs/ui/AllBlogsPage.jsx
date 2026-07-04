import { useSearchParams } from "react-router";
import { useState } from "react";

import MainSection from "./MainSection";
import SearchBox from "./SearchBox";
import SearchBoxControlled from "./SearchBoxControlled";

import styles from "./AllBlogsPage.module.css";

const AllBlogsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  return (
    <div className={styles.pageContainer}>
      <h1>Search An Article</h1>
      <SearchBoxControlled setSearchParams={setSearchParams} page={page} setPage={setPage} />

      <MainSection page={page} setPage={setPage} setSearchParams={setSearchParams} />
    </div>
  )
}

export default AllBlogsPage;