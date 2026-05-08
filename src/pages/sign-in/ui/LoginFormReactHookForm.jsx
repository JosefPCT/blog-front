
import { useForm } from "react-hook-form";
import { useState } from "react";
import loginUser from "../api/loginUser";

const LoginForm = () => {

  const { register, handleSubmit, formState: {errors}} = useForm();
  const [showPassword, setShowPassword] = useState(false);

  // Function called on successful submission
  const onSubmit = async (data) => {
    console.log("Form submitted", data);
    await loginUser(data);
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="user_name">Email:</label>
      <input 
        {...register("user_name", {
          required: "Email is required",
          minLength: { value: 3, message: "Too short"},
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address"
          }
        })} 
      />
      {errors.user_name && <p>{errors.user_name.message}</p>}

      <label htmlFor="passsword">Password:</label>
      <input 
        type={showPassword? "text" : "password"}
        {...register("password", {
          required: "Password is required",
          minLength: { value: 3, message: "Too short"},
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm;