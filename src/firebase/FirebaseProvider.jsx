import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const FirebaseProvider = ({children}) => {
  const [user, setUser] = useState(null)

// create User with email and password
const createUser = (email, password)=>{
  return createUserWithEmailAndPassword(auth, email, password)
 }
 
  // observer
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
     if(user){
       setUser(user)
     }
    })
   }, [])
  // Sign in user
  const signIn =(email, password) =>{
   return signInWithEmailAndPassword(auth, email, password)
  }
  // log out user
  const logOut = ()=>{
    signOut(auth)
    .then(()=>{
      toast.success('sign out successfully')
    })
  }


   const values = {
    createUser, 
    user, 
    logOut,
    signIn
    }
  

  return (
    <AuthContext.Provider value={values}>
{children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;