import { useState } from "react";

const RegisterForm = () => {
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
  const checkSubmitButton = () => {
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
        const { [name]: removedField, ...rest } = prevErrors;
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submit handler triggered...");
    // console.log(e.target);
    // for( const [key, value] of Object.entries(errors)){
    //   console.log(`${key}: ${value}`);
    // }
  }

  return(
    <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" value={formData.email} onChange={onChangeHandler} onBlur={onBlurHandler}/>
        { errors && errors.email && <span>{errors.email}</span>}

        <label htmlFor="password">Password:</label>
        { showPassword ? 
          <input type="text" name="password" id="password" value={formData.password} onChange={onChangeHandler} onBlur={onBlurHandler} />
          : <input type="password" name="password" id="password" value={formData.password} onChange={onChangeHandler} onBlur={onBlurHandler} /> }
        <button onClick={showPasswordToggle}>{ showPassword ? "Hide Password" : "Show Password"}</button>
        { errors && errors.password && <span>{errors.password}</span>}

        <label htmlFor="confirm_password">Confirm Password:</label>
        { showConfirmPassword ?
          <input type="text" name="confirm_password" id="confirm_password" value={formData.confirm_password} onChange={onChangeHandler} onBlur={onBlurHandler} />
          : <input type="password" name="confirm_password" id="confirm_password" value={formData.confirm_password} onChange={onChangeHandler} onBlur={onBlurHandler} /> }
        <button onClick={showConfirmPasswordToggle}>{ showConfirmPassword ? "Hide Password" : "Show Password"}</button>
        { errors && errors.confirm_password && <span>{errors.confirm_password}</span>}

        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={onChangeHandler} onBlur={onBlurHandler} />
        { errors && errors.firstName && <span>{errors.firstName}</span>}
        
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={onChangeHandler} onBlur={onBlurHandler} />
        { errors && errors.lastName && <span>{errors.lastName}</span>}

        <button type="submit" disabled={loading || checkSubmitButton()}>{ checkSubmitButton() ? 'Register' : loading ? 'Registration in process...' : 'Register'}</button>
    </form>
  )
}


export default RegisterForm;