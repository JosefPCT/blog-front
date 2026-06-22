
const SearchBox = ({searchParams, setSearchParams}) => {
  
  const changeHandler = (e) => {
    setSearchParams(e.target.value);
  }

  return(
    <div>
      <form action="/all-blogs" method="get">
        <input type="search" name="value" id="searchValue"  />

        <fieldset>
          <input type="radio" name="category" id="title" value="title" /> 
          <label htmlFor="title">By Title</label>

          <input type="radio" name="category" id="body" value="body" defaultChecked />
          <label htmlFor="body">By Body Text</label>
        </fieldset>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBox;