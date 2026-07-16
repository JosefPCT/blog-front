import { useState } from "react";
import { NavLink } from "react-router";

// import LoginForm from "./LoginFormControlled";
// import LoginForm from "./LoginFormUnControlled";
import LoginForm from "./LoginFormReact19";
// import LoginForm from "./LoginFormReactHookForm";

import RegisterForm from "./RegisterForm";

import { JosefBigLogo } from "../../../shared/assets/index";

import styles from "./LoginSection.module.css";

const LoginSection = () => {
  const [toggleSection, setToggleSection] = useState("login");

  const toggleSectionHandler = (e) =>{
    e.preventDefault();
    setToggleSection(prevValue => prevValue === 'login' ? 'register' : 'login');
  }
  return(
    <div className={styles.sectionContainer}>
      <div className={`${styles.mainContentContainer} ${styles.sectionChild}`}>
        <div className={styles.brandContainer}>
          <NavLink to="/"><img src={JosefBigLogo} alt="Header Logo" srcset="" /></NavLink>
        </div>
        <div className={styles.formSection}>
          <h3>{ toggleSection === 'login' ? 'Login' : 'Register'}</h3>
          <span className={`${styles.formSubheading}`}>{ toggleSection === 'login' ? 'Welcome back! Please enter your login details' : 'Create an account'}</span>
          { toggleSection === 'login' ? <LoginForm /> : <RegisterForm setToggleSection={setToggleSection}/>}
          {/* <a href="#" onClick={toggleSectionHandler}>{ toggleSection === 'login' ? 'No account yet? Go register here' : 'Already have an account? Login here'}</a> */}
          { toggleSection === 'login' ? 
           <p>No account yet? <a href="#" onClick={toggleSectionHandler}>Register</a></p> :
           <p>Already have an account? <a href="#" onClick={toggleSectionHandler}>Sign in</a></p>
          }
        </div>
        <div className={styles.footerSection}>
          <span>Join our community of hardworking individuals that spends a lot of time reading articles about new technologies and developer blogs. Login to access certain membership perks including the ability to add a comment under a post.</span>
        </div>
      </div>
      <div className={`${styles.mainImageContainer} ${styles.sectionChild}`}>
        <img src="https://images.unsplash.com/photo-1610050731821-f58da5e8abc6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image  " />
      </div>
    </div>
  )
}

export default LoginSection;