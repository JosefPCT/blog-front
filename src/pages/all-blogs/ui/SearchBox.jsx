
const SearchBox = ({searchParams, setSearchParams}) => {
  
  const changeHandler = (e) => {
    // setSearchParams(e.target.value);
  }

  const submitHandler = (e) => {
    console.log("Submit handler");
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);

    setSearchParams("ab");
    
  }

  return(
    <div>
      <form action="/all-blogs" method="get" onSubmit={submitHandler}>
        <input type="search" name="value" id="searchValue"  />
        <input type="date" name="dateFrom" id="dateFrom" />

        <fieldset>
          <input type="radio" name="category" id="title" value="title" /> 
          <label htmlFor="title">By Title</label>

          <input type="radio" name="category" id="body" value="text" defaultChecked />
          <label htmlFor="body">By Text Body</label>

          <input type="radio" name="category" id="author" value="author" />
          <label htmlFor="author">By Author</label>
        </fieldset>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBox;