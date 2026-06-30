export default function SortingDropDown({addQueryParam}){

  const onChangeHandler = (e) => {
    console.log("Choosing")
    console.log(e.target.value);
    addQueryParam("sort", e.target.value);
  }

  return(
    <div>
      <span>Sort By:</span>
      <select name="sorting" id="sorting" onChange={onChangeHandler}>
        <option value="+createdAt">Latest</option>
        <option value="-createdAt">Oldest</option>
        <option value="+title">A-Z</option>
        <option value="-title">Z-A</option>
      </select>
    </div>
  )
}