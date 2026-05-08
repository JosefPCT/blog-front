// Using `formData` method
import loginUser from "../api/loginUser";

const LoginForm = () => {
  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const formData = new FormData(event.currentTarget);
    console.log(formData);

    console.log(formData.entries());
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    await loginUser(data);
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_name">Email:</label>
        <input type="email" name="user_name" id="user_name" required />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" required />

        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default LoginForm;

// // Using `useRef` method
// import { useRef } from "react";
// import authUser from "../api/authUser";

// const LoginForm = () => {
//   const emailInput = useRef(null);
//   const passwordInput = useRef(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // console.log(emailInput.current.value);
//     // console.log(passwordInput.current.value);
//     const data = {
//         [emailInput.current.name] : emailInput.current.value,
//         [passwordInput.current.name] : passwordInput.current.value
//     };
//     console.log(data);
//     await authUser(data);
//   }

//   return(
//     <>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="user_name">Email:</label>
//         <input type="email" name="user_name" id="user_name" ref={emailInput} required />

//         <label htmlFor="password">Password:</label>
//         <input type="password" name="password" id="password" ref={passwordInput} required />

//         <button type="submit">Login</button>
//       </form>
//     </>
//   )
// }

// export default LoginForm;