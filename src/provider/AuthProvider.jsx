import React from 'react';
import { AuthContext } from '../contex/AuthContex';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/FirebaseConfig';

const AuthProvider = ({children}) => {

     const createUser = (email, password) =>{
      return createUserWithEmailAndPassword(auth, email, password)
     }

     const signInUser = (email, password)=>{
     return signInWithEmailAndPassword(auth, email, password)
     }

  const userInfo = {
createUser,signInUser
  }

  return (
   
   <AuthContext.Provider value={userInfo}>
      { children }
   </AuthContext.Provider>
  );
};

export default AuthProvider;


