// Using `useActionState`

import { useActionState } from "react";
import authUser from "../api/authUser";

async function loginUser(prevState, formData){
  const email = formData.get("user_name");
  const data = {
    user_name: formData.get("user_name"),
    password: formData.get("password"),
  }

  try {
    await authUser(data);
    if(!email.includes('@')){
      return { error: "Invalid email address"};
    }
    return { error: null, success: true, message: `Login successful`};
  } catch (error) {
    return { error: `"Wrong Credentials and ${error}`, success: false}
  }


}

const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  return(
    <form action={formAction}>
        <label htmlFor="user_name">Email:</label>
        <input type="email" name="user_name" id="user_name" required />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" required />

        <button type="submit" disabled={isPending}>
            {isPending? "Logging in..." : "Login"}
        </button>

        {state?.error && <p style={{ color: 'red'}}>{state.error}</p>}
        {state?.success && <p>Login successful! {state.message}</p>}
    </form>
  )
}   

export default LoginForm;

// Basic example using only `action` attribute and action function
// import authUser from "../api/authUser";


// async function loginUser(formData) {
//   console.log(formData);
//   const data = {
//     user_name: formData.get("user_name"),
//     password: formData.get("password"),
//   }
//   console.log(data);
  
//   try {
//     await authUser(data);
//   } catch (error) {
//    console.log(error); 
//   }
// }

// const LoginForm = () => {
//   return(
//     <form action={loginUser}>
//       <label htmlFor="user_name">Email:</label>
//       <input type="email" name="user_name" id="user_name" required />

//       <label htmlFor="password">Password:</label>
//       <input type="password" name="password" id="password" required />

//       <button type="submit">Login</button>
//     </form>
//   )
// }

// export default LoginForm;