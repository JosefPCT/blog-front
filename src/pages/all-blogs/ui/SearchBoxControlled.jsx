import { useState } from "react";
// import { useSearchParams } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

import ByDateInput from "./ByDateInput";

const SearchBoxControlled = ( { setSearchParams, page, setPage }) => {
  const [userInput, setUserInput] = useState("");
  const [toggleInput, setToggleInput] = useState("text");

  const queryClient = useQueryClient();

  const onToggleInput = () => {
    setToggleInput(prev => prev === "text" ? "date" : "text" );
  }

  const onChangeInputHandler = (e) => {
    setUserInput(e.target.value);
  }

  const onBlurHandler = (e) => {
    console.log("On blur triggered");
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const dateFormat = /^\d{4}[./-](0[1-9]|1[0-2])[./-](0[1-9]|[12]\d|3[01])$/;
    dateFormat.test(userInput);
    console.log("test format");
    console.log(dateFormat.test(userInput));
    if(dateFormat.test(userInput)){
      console.log("Its a date");
    } else {
      console.log("It's not a date");
    }

    console.log("Matching test");
    const matchResult = userInput.match(dateFormat);
    console.log(matchResult);

    if(toggleInput === "text"){
      userInput === "" ? setSearchParams({ sort: "+createdAt", page: 1}) : setSearchParams({ title: userInput, text: userInput, authorFirstName: userInput, authorLastName: userInput, mode: "or", page: 1, sort: "+createdAt"});
    } else {
      setSearchParams({ dateFrom: data.dateFrom, dateTo: data.dateTo, page: 1, sort: "+createdAt"});
    }
    setPage(1);

    
    queryClient.invalidateQueries({ queryKey: ['allPosts']});
  }

  const onKeyUpHandler = (e) => {
    console.log("Key up triggered");
  }

  return(
    <div>
        <p>Search Box Controlled</p>
        { toggleInput === "text" ? <button onClick={onToggleInput}> Search By Date </button> : <button onClick={onToggleInput}> Search By Text/Char</button>}
        <form onSubmit={onSubmitHandler}>
          
          { toggleInput === "text" ? 
            <input type="text" name="userInput" id="userInput" onChange={onChangeInputHandler} onBlur={onBlurHandler} onKeyUp={onKeyUpHandler} value={userInput}/> :
            <ByDateInput />
          }
          
          <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBoxControlled;