// Helper function that does several things, creates the token and needed data to store in the `localStorage` and sets global context of `isAuth` to true
// Will trigger the custom hook `useFetchCurrentUser` to re-fetch
export default async function postLogin(tokenData, isAuth, setIsAuth){

  const token = { value: tokenData.token, created: Date.now(), expiryInMins: 15};
  localStorage.setItem("token", JSON.stringify(token));
  setIsAuth(true); 
}