import { useState } from "react";

// import LoginForm from "./LoginFormControlled";
// import LoginForm from "./LoginFormUnControlled";
import LoginForm from "./LoginFormReact19";
// import LoginForm from "./LoginFormReactHookForm";

import RegisterForm from "./RegisterForm";

const LoginSection = () => {
  const [toggleSection, setToggleSection] = useState("login");

  const toggleSectionHandler = () =>{
    setToggleSection(prevValue => prevValue === 'login' ? 'register' : 'login');
  }
  return(
    <>
      <button onClick={toggleSectionHandler}>{ toggleSection === 'login' ? 'Go to registration' : 'Go to login'}</button>
      { toggleSection === 'login' ? <LoginForm /> : <RegisterForm setToggleSection={setToggleSection}/>}
    </>
  )
}

export default LoginSection;