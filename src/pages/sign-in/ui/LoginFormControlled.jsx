import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import authUser from "../api/authUser";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false);
  const [success, setSuccess] = useState(false)
  // const [errorMessage, setErrorMessage] = useState("");

  const handleChange = async (event) => {
    console.log(event.target);
    setFormData(prevFormData => ({ ...prevFormData, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await authUser(formData);
      setSuccess(true);
    } catch (error) {
      console.log(error);
      console.error("Error submitting form", error);
      setError(true);
      // setErrorMessage(error);
    } finally {
      setLoading(false);
    }

  }

  return(
    <>
      { error && <p>Something went wrong: {error}</p>}
      { success && <p>Login Success</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_name">Email:</label>
        <input type="email" name="user_name" id="user_name" onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" onChange={handleChange} required />

        <button type="submit" disabled={loading}> {loading ? 'Submitting...' : 'Submit'}</button>
      </form>
    </>
  )
}

export default LoginForm

// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import authUser from "../api/authUser";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     user_name: "",
//     password: ""
//   });
//   const [loading, setLoading] = useState(false);
//   const [error,setError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = async (event) => {
//     console.log(event.target);
//     setFormData(prevFormData => ({ ...prevFormData, [event.target.name]: event.target.value }))
//     setFormData({...formData, [event.target.name]: event.target.value})
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(event.target);
//     console.log(formData);
//     alert(formData);
//     const { isPending, isError, data, error } = useQuery({
//       queryKey: ['login'],
//       queryFn: () => authUser(),
//     })

//     setLoading(true);

//     try {
//       // const apiUrl = import.meta.env.VITE_API_URL;
//       // const response = await fetch(`${apiUrl}/api/v1/auth/login`, {
//       //   method:'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json'
//       //   },
//       //   body: JSON.stringify({ email: formData.user_name , password: formData.password})
//       // });

//       // if(!response.ok){
//       //   throw new Error("Network response is not ok");
//       // }

//       // const result = await response.json();
//       // localStorage.setItem("token", result.token)
//       // console.log(result);
//       // return result;
//       await authUser(formData);
//     } catch (error) {
//       console.error("Error submitting form", error);
//       setError(true);
//       // setErrorMessage(error);
//     } finally {
//       setLoading(false);
//     }

//   }

//   return(
//     <>
//       { error ? "Login unsuccessful" : "Login success"}
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="user_name">Email:</label>
//         <input type="email" name="user_name" id="user_name" onChange={handleChange} required />

//         <label htmlFor="password">Password:</label>
//         <input type="password" name="password" id="password" onChange={handleChange} required />

//         <button type="submit" disabled={loading}> {loading ? 'Submitting...' : 'Submit'}</button>
//       </form>
//     </>
//   )
// }

// export default LoginForm