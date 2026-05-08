import { millisecondstoMinutes } from "./timeConverter";

// returns boolean, depending if token is valid or not
export const isTokenValid = () => {
  const storedToken = localStorage.getItem("token");
  const token = JSON.parse(storedToken);
  if(!token){
    console.log("No token");
    return false;
  }

  const tokenTimeInMins = millisecondstoMinutes(Date.now() - token.created);
  

  return tokenTimeInMins < token.expiryInMins;
}

export const setToken = () => {
  if(!isTokenValid()){
    localStorage.clear();
  }
}