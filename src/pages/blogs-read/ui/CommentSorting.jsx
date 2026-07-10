export default function CommentSorting(){

  const onChangeHandler = (e) => {
    console.log(`Sorting Comments... by ${e.target.value}`);
  }

  return(
    <>
      <select name="commentSort" id="commentSort" onChange={onChangeHandler}>
        <option value="-createdAt">Latest</option>
        <option value="+createdAt">Oldest</option>
        <option value="-likes">Most liked</option>
        <option value="+likes">Least liked</option>
      </select>
    </>
  )
}