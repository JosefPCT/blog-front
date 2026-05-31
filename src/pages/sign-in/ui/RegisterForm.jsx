import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",

  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Use to disable/enable the submit button, disables the submit button if it returns true, enables the return button if it retuns false
  const checkSubmitButton = () => {
    if(Object.keys(errors).length !== 0){
      return true;
    }

    for(const [key, value] of Object.entries(formData)){
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
        <input type="password" name="password" id="password" value={formData.password} onChange={onChangeHandler} onBlur={onBlurHandler} />

        

        <button type="submit" disabled={loading || checkSubmitButton()}>{ checkSubmitButton() ? 'Register' : loading ? 'Registration in process...' : 'Register'}</button>
    </form>
  )
}


export default RegisterForm;