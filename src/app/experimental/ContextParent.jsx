
import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";

import UnrelatedWrapper from "./UnrelatedWrapper";
import ContextConsumer from "./ContextConsumer";

import { useState, useEffect } from "react";

const ContextParent = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isUser, setUser] = useState("unauthorized");

  useEffect(() => {
    console.log(`Current value of user is ${isUser}`);
  }, [isUser])

  return(
    <>
      <h1>Context Parent</h1>
      <UserContext.Provider value={ { isUser, setUser } }>
      <AuthContext.Provider value={ { isAuth, setIsAuth} }>
        <UnrelatedWrapper>
            <ContextConsumer />
        </UnrelatedWrapper>
      </AuthContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default ContextParent;