import { useState, useRef, useEffect } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  })

  const [loading, setLoading] = useState(false);

  const [hasErrors, setHasErrors] = useState(false);

  const errorsRef = useRef(errors);

  useEffect(() => { errorsRef.current = errors}, [errors]);

  const validateField = (fieldName, fieldValue) => {
    console.log("Validating...");
    console.log(fieldName);
    console.log(fieldValue);

    let currentError = null;

    if (fieldName === 'email'){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!fieldValue) currentError ='Email is required';
      else if (!emailRegex.test(fieldValue)) currentError = 'Invalid email format';
    }

    return currentError;

    // setErrors(prevErrors => ({
    //    ...prevErrors,
    //    [fieldName]: null
    // }));

    // if(fieldName === "email"){
    //   if(!(fieldValue.includes("@"))){
    //     setErrors(prevErrors => ({
    //       ...prevErrors,
    //       [fieldName]: "Invalid email format, email must include @"
    //     }));
    //   }

    //   if(fieldValue === ""){
    //     setErrors(prevErrors => ({
    //       ...prevErrors,
    //       [fieldName]: "Email field must not be empty"
    //     }));
    //   }
    // }

    
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
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: currentError
    }));

    console.log("Current errors object list");
    console.log(errors);

    // if(currentError){
    //   console.log("Has error");
    //   console.log(currentError);
    //   setHasErrors(true);
    // } else {
    //   console.log("No error");
    //   setHasErrors(false);
    // }

    console.log("ref current value:");
    console.log(errorsRef.current);
    for( const [key, value] of Object.entries(errorsRef.current)){
      console.log(`${key}: ${value}`);
      if(value){
        setHasErrors(true);
      }
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submit handler triggered...");
    console.log(e.target);
    // for( const [key, value] of Object.entries(errors)){
    //   console.log(`${key}: ${value}`);
    // }
  }

  return(
    <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" value={formData.email} onChange={onChangeHandler} onBlur={onBlurHandler}/>
        { errors.email && <span>{errors.email}</span>}

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={onChangeHandler} onBlur={onBlurHandler} />

        <button type="submit" disabled={loading || hasErrors}>{ hasErrors ? 'Register' : loading ? 'Registration in process...' : 'Register'}</button>
    </form>
  )
}

export default RegisterForm;