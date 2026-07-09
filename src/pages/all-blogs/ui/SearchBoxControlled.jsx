// Subcomponent that handles rendering of the Searchbox section
// Has state to set the user input to make it controlled and a state to toggle between text and date inputs
// Uses setSearchParams to trigger a re-render and set the search url query and let it trigger a refetch on AllPostsList component
// Uses useQueryClient from tanstack to invalidate the previous query from the fetching in (AllPostsList) and not use stale data
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import SearchTextInput from "./SearchTextInput";
import ByDateInput from "./ByDateInput";

import styles from "./SearchBoxControlled.module.css";


const SearchBoxControlled = ( { setSearchParams, setPage }) => {
  const [userInput, setUserInput] = useState("");
  const [toggleInput, setToggleInput] = useState("text");

  const queryClient = useQueryClient();

  const onToggleInput = () => {
    setToggleInput(prev => prev === "text" ? "date" : "text" );
  }

  const onChangeInputHandler = (e) => {
    setUserInput(e.target.value);
  }

  const onKeyUpHandler = () => {
    console.log("Key up triggered");
  }

  const onBlurHandler = () => {
    console.log("On blur triggered");
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if(toggleInput === "text"){
      userInput === "" ? setSearchParams({ sort: "+createdAt", page: 1}) : setSearchParams({ title: userInput, text: userInput, authorFirstName: userInput, authorLastName: userInput, mode: "or", page: 1, sort: "+createdAt"});
    } else {
      setSearchParams({ dateFrom: data.dateFrom, dateTo: data.dateTo, page: 1, sort: "+createdAt"});
    }
    setPage(1);

    
    queryClient.invalidateQueries({ queryKey: ['allPosts']});
  }

  return(
    <div class={styles.topSection}>
      <div class={styles.searchBoxContainer}>
        <form onSubmit={onSubmitHandler}>
          { toggleInput === "text" ? <SearchTextInput onChangeInputHandler={onChangeInputHandler} onBlurHandler={onBlurHandler} onKeyUpHandler={onKeyUpHandler} userInput={userInput}  /> : <ByDateInput /> }
          { toggleInput === "date" ? <button type="submit">Search</button>  : ""}
        </form>

        { toggleInput === "text" ? <p>If you prefer to search by dates click <span onClick={onToggleInput}>here</span></p> : <p>If you prefer to search by text click <span onClick={onToggleInput}>here</span></p> }
      </div>
    </div>
  )
}

export default SearchBoxControlled;