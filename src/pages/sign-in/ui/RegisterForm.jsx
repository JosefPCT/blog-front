import { useState } from "react";

import registerUser from "../api/registerUser";

import styles from "./RegisterForm.module.css";

const RegisterForm = ({setToggleSection}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    firstName: "",
    lastName: "",
    
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Use to disable/enable the submit button, disables the submit button if it returns true, enables the return button if it retuns false
  const hasErrors = () => {
    if(Object.keys(errors).length !== 0){
      return true;
    }

    for(const value of Object.values(formData)){
      if(value === ''){
        return true;
      }
    }

    return false;
  }

  // Helper function that validates inputs, return the error if there is one
  const validateField = (fieldName, fieldValue) => {
    console.log("Validating...");
    // console.log(fieldName);
    // console.log(fieldValue);

    let currentError = null;

    if (fieldName === 'email'){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!fieldValue) currentError = 'Email is required';
      else if (!emailRegex.test(fieldValue)) currentError = 'Invalid email format';
    }

    if (fieldName === 'password'){
      if (!fieldValue) currentError = 'Password is required';
      else if(fieldValue.length <= 3) currentError = 'Password is too short';
    }

    if (fieldName === 'confirm_password'){
      if (fieldValue !== formData.password) currentError = 'Must match password';
    }

    if (fieldName === 'firstName'){
      if (!fieldValue) currentError = 'First name is required';
    }

    if (fieldName === 'lastName'){
      if (!fieldValue) currentError = 'Last name is required';
    }


    return currentError;
    
  }

  const onChangeHandler = (e) =>{
    setFormData(prevFormData => ({
        ...prevFormData,
        [e.target.name]: e.target.value
    }))
  }

  const onBlurHandler = (e) => {
    console.log("Blur event triggered");
    const { name, value } = e.target;

    const currentError = validateField(name, value);
    console.log("Current error:");
    console.log(currentError);

    if(currentError){
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: currentError
      }));
    } else {
      setErrors(prevErrors => {
        const { [name]: _, ...rest } = prevErrors;
        return rest;
      })

    }
  }

  const showPasswordToggle = () => {
    setShowPassword(prev => !prev);
  }

  const showConfirmPasswordToggle = () => {
    setShowConfirmPassword(prev => !prev);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("Submit handler triggered...");
    console.log(formData);
    let result;
    try {
      setLoading(true);
      result = await registerUser(formData);
    } catch (error) {
      throw new Error ("Something went wrong", error);
    } finally {
      setLoading(false);
    }
    console.log("Registered user");
    console.log(result);
    setToggleSection("login");
    // console.log(e.target);
    // for( const [key, value] of Object.entries(errors)){
    //   console.log(`${key}: ${value}`);
    // }
  }

  return(
    <form onSubmit={onSubmitHandler} className={`${styles.formContainer}`}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={formData.email} onChange={onChangeHandler} onBlur={onBlurHandler}/>
        { errors && errors.email && <span>{errors.email}</span>}

        <div className={`${styles.showPasswordContainer}`}>
          <label htmlFor="password">Password</label>
          { showPassword ? 
            <button onClick={showPasswordToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button> :
            <button onClick={showPasswordToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            </button>
          }
        </div>
        
        { showPassword ? 
          <input type="text" name="password" id="password" value={formData.password} onChange={onChangeHandler} onBlur={onBlurHandler} />
          : <input type="password" name="password" id="password" value={formData.password} onChange={onChangeHandler} onBlur={onBlurHandler} /> }
          
        {/* <button onClick={showPasswordToggle}>{ showPassword ? "Hide Password" : "Show Password"}</button> */}
        { errors && errors.password && <span>{errors.password}</span>}

        <div className={`${styles.showPasswordContainer}`}>
          <label htmlFor="confirm_password">Confirm Password</label>
          { showConfirmPassword ? 
            <button onClick={showConfirmPasswordToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button> :
            <button onClick={showConfirmPasswordToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            </button>
          }
        </div>
        { showConfirmPassword ?
          <input type="text" name="confirm_password" id="confirm_password" value={formData.confirm_password} onChange={onChangeHandler} onBlur={onBlurHandler} />
          : <input type="password" name="confirm_password" id="confirm_password" value={formData.confirm_password} onChange={onChangeHandler} onBlur={onBlurHandler} /> }

        {/* <button onClick={showConfirmPasswordToggle}>{ showConfirmPassword ? "Hide Password" : "Show Password"}</button> */}
        { errors && errors.confirm_password && <span>{errors.confirm_password}</span>}

        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={onChangeHandler} onBlur={onBlurHandler} />
        { errors && errors.firstName && <span>{errors.firstName}</span>}
        
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={onChangeHandler} onBlur={onBlurHandler} />
        { errors && errors.lastName && <span>{errors.lastName}</span>}

        <button type="submit" disabled={loading || hasErrors()}>{  loading ? 'Registration in progress...' : hasErrors() ? 'Register (Fix errors first)' : 'Register'}</button>
    </form>
  )
}


export default RegisterForm;