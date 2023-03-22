import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

//// get user with onAuthStateChanged and set user useState ///
    
    const [user, setUser] = useState('')

    console.log(user);

  /// create user with email and password ///
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    };
    
    /// login user with email and password ///

    const emailAndPasswordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

  useEffect(() => {
      const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
          
      });
      return ()=> unsubcribe()
  }, []);

  const info = {
      createUser,
      emailAndPasswordLogin,
      user,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
