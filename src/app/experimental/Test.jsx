// import { useState } from "react";

import TestChild from "./TestChild";
import AnotherTestChild from "./AnotherTestChild";

import ContextParent from "./ContextParent";

const TestComponent = () => {


  return(
    <>
      <h1>Test Component</h1>
      <ContextParent />
      <TestChild />
      <AnotherTestChild />
    </>
  )
}

export default TestComponent;