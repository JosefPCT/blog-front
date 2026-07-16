import { useState } from "react";

// import LoginForm from "./LoginFormControlled";
// import LoginForm from "./LoginFormUnControlled";
import LoginForm from "./LoginFormReact19";
// import LoginForm from "./LoginFormReactHookForm";

import RegisterForm from "./RegisterForm";

import styles from "./LoginSection.module.css";

const LoginSection = () => {
  const [toggleSection, setToggleSection] = useState("login");

  const toggleSectionHandler = () =>{
    setToggleSection(prevValue => prevValue === 'login' ? 'register' : 'login');
  }
  return(
    <div className={styles.sectionContainer}>
      <div className={styles.mainContentContainer}>
        <div>
          <h2>Brand</h2>
        </div>
        <div className={styles.formSection}>
          <h3>Welcome</h3>
          <p>Enter your details</p>
          <button onClick={toggleSectionHandler}>{ toggleSection === 'login' ? 'Go to registration' : 'Go to login'}</button>
          { toggleSection === 'login' ? <LoginForm /> : <RegisterForm setToggleSection={setToggleSection}/>}
        </div>
        <div>
          Footer
        </div>
      </div>
      <div className={styles.mainImageContainer}>
        <img src="https://images.unsplash.com/photo-1783961797133-dd0fc5a722ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image  " />
      </div>
    </div>
  )
}

export default LoginSection;