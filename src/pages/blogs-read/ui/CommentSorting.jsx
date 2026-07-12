// Component that handles rendering the sorting options for comments via user input and HTML's <select> element
// Triggers a refetch automatically because the query used is dependent on the search's query, which will be changed when we call on the setSearchParams

import styles from "./CommentSorting.module.css";

export default function CommentSorting( { setSearchParams }){

  const onChangeHandler = (e) => {
    console.log(`Sorting Comments... by ${e.target.value}`);
    setSearchParams({ sort: e.target.value });
  }

  return(
    <>
      <select name="commentSort" id="commentSort" onChange={onChangeHandler} className={styles.customSelect}>
        <option value="-createdAt">Latest</option>
        <option value="+createdAt">Oldest</option>
        <option value="-likes">Most liked</option>
        <option value="+likes">Least liked</option>
      </select>
    </>
  )
}