import { millisecondstoMinutes } from "./timeConverter";

// returns boolean, depending if token is valid or not
export const isTokenValid = () => {
  const storedToken = localStorage.getItem("token");
  if(!storedToken){
    console.log("No token");
    return false;
  }

  const token = JSON.parse(storedToken);
  

  const tokenTimeInMins = millisecondstoMinutes(Date.now() - token.created);
  

  return tokenTimeInMins < token.expiryInMins;
}

export const setToken = () => {
  if(!isTokenValid()){
    localStorage.clear();
  }
}