import { useState, useEffect } from "react";

const TestChild = () => {

   const [test, setTest] = useState("big");

   useEffect(() => {
     console.log("Use effect in effect...");
   }, [test]);


   const testHandler = () => {
    setTest( test === 'big' ? "small" : "big")
   }

  return(
    <>
      <p>Test Child</p>
      <button onClick={testHandler}>Toggle</button>
      <p>{test}</p>
    </>
  )
}

export default TestChild;