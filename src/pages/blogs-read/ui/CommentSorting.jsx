import { useQueryClient } from "@tanstack/react-query";

import styles from "./CommentSorting.module.css";

export default function CommentSorting( { setSearchParams }){
  const queryClient = useQueryClient();

  const onChangeHandler = (e) => {
    console.log(`Sorting Comments... by ${e.target.value}`);
    setSearchParams({ sort: e.target.value });
    queryClient.invalidateQueries({ queryKey: 'specificPostComments'});
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