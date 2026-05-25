// The provider that makes `user` and `setUser` available to its children
// Preserves user login session by checking the token inside local storage
// Uses a custom hook that updates the current user details when `isAuth` changes state
import { useState } from "react";

import { UserContext } from "../model/UserContext";
import useFetchCurrentUser from "../model/useFetchCurrentUser";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useFetchCurrentUser(user, setUser);
  return(
    <UserContext.Provider value={{ user, setUser }} >
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;