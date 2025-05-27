import React from 'react';
import { AuthContext } from '../contex/AuthContex';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/FirebaseConfig';

const AuthProvider = ({children}) => {

     const createUser = (email, password) =>{
      return createUserWithEmailAndPassword(auth, email, password)
     }

  const userInfo = {
createUser,
  }

  return (
   
   <AuthContext.Provider value={userInfo}>
      { children }
   </AuthContext.Provider>
  );
};

export default AuthProvider;


