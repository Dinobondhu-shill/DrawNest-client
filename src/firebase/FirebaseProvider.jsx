import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext,  useEffect, useState } from "react";
import auth from "./firebase.config";
import swal from 'sweetalert';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider()

const FirebaseProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
 
// create User with email and password
const createUser = (email, password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
 }
 //  Update User Profile
const updateUserProfile =(name, image)=>{
  return updateProfile(auth.currentUser, {
    displayName: name, 
    photoURL: image
  })
}
  // observer
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
   
        
        setUser(user)
        setLoading(false)
    });
    return ()=> unsubscribe()
  }, []);
  // Sign in user
  const signIn =(email, password) =>{
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, password)
   
  }
  // google sign in
  const googleLogin = ()=>{
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
   
  }
  // github Provider
  const githubLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }
// facebook login
const facebookLogin =() =>{
  setLoading(true)
  return signInWithPopup(auth, facebookProvider)
}
  // log out user
  const logOut = ()=>{
    setUser(null)
    signOut(auth)
    .then(()=>{
      swal('Log out successful')
    })
  }


   const values = {
    createUser, 
    user, 
    logOut,
    signIn,
    googleLogin,
    githubLogin, 
    facebookLogin,
    updateUserProfile,
    loading
    }
  

  return (
    <AuthContext.Provider value={values}>
{children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;