import { useState } from "react";
// import { useSearchParams } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

const SearchBoxControlled = ( {searchParams, setSearchParams }) => {
  const [userInput, setUserInput] = useState("");

  const queryClient = useQueryClient();

  const onChangeInputHandler = (e) => {
    setUserInput(e.target.value);
  }

  const onBlurHandler = (e) => {
    console.log("On blur triggered");
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setSearchParams({value: userInput, category: "title"});
    queryClient.invalidateQueries({ queryKey: ['allPosts']});
  }

  return(
    <div>
        <p>Search Box Controlled</p>
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="userInput" id="userInput" onChange={onChangeInputHandler} onBlur={onBlurHandler} value={userInput}/>
          <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBoxControlled;