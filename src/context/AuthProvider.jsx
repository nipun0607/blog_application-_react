import { createContext, useContext, useState } from "react";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword,getAuth,signOut}from 'firebase/auth';
import {signInWithEmailAndPassword } from 'firebase/auth';


const AuthContext =createContext({value:123})

export const useAuth=()=>{
    return useContext(AuthContext)
}
const AuthProvider=(props)=>{
  

    const [currentUser,setCurrentUser]=useState({})
    const auth=getAuth();

   const signUp=(email,password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
   }

   const login=(email,password)=>{
   return signInWithEmailAndPassword(auth, email, password)
   }

   const logout=()=>{
    return auth.signOut(auth)
   }

   const authData={
    currentUser,
    setCurrentUser,
    signUp,
    login,
    logout,

   }
   return (
    <>
    <AuthContext.Provider value={authData} >
    {props.children}
    </AuthContext.Provider>
    </>
   )
}
export default AuthProvider;