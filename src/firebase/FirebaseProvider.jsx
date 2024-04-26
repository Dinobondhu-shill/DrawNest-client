import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider()

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
  // google sign in
  const googleLogin = ()=>{
   return signInWithPopup(auth, googleProvider)
  }
  // github Provider
  const githubLogin = ()=>{
    return signInWithPopup(auth, githubProvider)
  }
// facebook login
const facebookLogin =() =>{
  return signInWithPopup(auth, facebookProvider)
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
    signIn,
    googleLogin,
    githubLogin, 
    facebookLogin
    }
  

  return (
    <AuthContext.Provider value={values}>
{children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;