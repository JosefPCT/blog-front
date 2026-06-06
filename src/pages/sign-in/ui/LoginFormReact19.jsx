  // Using `useActionState`
  // Login Form that uses new way to create a form from React 19's `useActionState` and passing a function to the `action` attribute of a form
  // Uses global state `isAuth` and `user`

  import { useActionState } from "react";
  import { useNavigate, useSearchParams } from "react-router";

  import loginUser from "../api/loginUser";
  import postLogin from "../api/postLogin";
  import { setToken } from "../../../shared/lib/tokenHelper";
  import { useAuth } from "../../../entities/user";


  // **Note: You can create asynchronous action function inside the component, so you won't need to use `.bind()` to pass on custom arguments, since you can directly use any context data, state or state setter you need**
  async function loginUserAction(isAuth, setIsAuth, navigate, prevUrl, prevState, formData){ 
    setToken();
    console.log("Prev url value:");
    console.log(prevUrl);

    const email = formData.get("user_name");
    const data = {
      user_name: formData.get("user_name"),
      password: formData.get("password"),
    }

    try {
      if(isAuth){
        return { error: "Already logged in" };
      }

      if(!email.includes('@')){
        return { error: "Invalid email address"};
      }
      const result = await loginUser(data);
      await postLogin(result, isAuth, setIsAuth);

      setTimeout(() => {
        navigate(prevUrl);
      }, 2000);

      // Instead of returning the below, use `useNavigate` to navigate to `/` or `/dashboard` or the previous url before the login 
      return { error: null, success: true, message: `Login successful`};
    } catch (error) {
      return { error: `"Wrong Credentials and ${error}`, success: false}
    }


  }

  const LoginForm = () => {
    const navigate = useNavigate();
    const [searchParams]= useSearchParams();
    const { isAuth, setIsAuth } = useAuth();

    const target = searchParams.get("prevUrl");
    // Can refactor the link in 'home' to include a search parameters, but with this, it will default to '/' as the previous url if no search parameter is detected
    const prevUrl = target ? target : "/";

    const actionWithSetter = loginUserAction.bind(null, isAuth, setIsAuth, navigate, prevUrl)
    const [state, formAction, isPending] = useActionState(actionWithSetter, null);

    // async function loginUserAction(prevState, formData) {
    //   console.log("Login...");

    //   const email = formData.get("user_name");
    //   const data = {
    //     user_name: formData.get("user_name"),
    //     password: formData.get("password"),
    //   }

    //   const result = await loginUser(data);
    //   await postLogin(result, isAuth, setIsAuth);

    //   setTimeout(() => {
    //     navigate(prevUrl);
    //   }, 2000);

    // }

    // const [state, formAction, isPending] = useActionState(loginUserAction, null);
    

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