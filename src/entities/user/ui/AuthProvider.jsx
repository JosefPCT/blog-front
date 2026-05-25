// The provider that makes `isAuth` and `setIsAuth` available to its children
// Preserves user login session by checking the token inside local storage
import { useState } from "react";

import { isTokenValid } from "../../../shared/lib";
import { AuthContext } from "../model/AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => isTokenValid() ? true : false);

  return (
    <AuthContext.Provider value ={ { isAuth, setIsAuth }}>
        {children}
    </AuthContext.Provider>
  )
}

