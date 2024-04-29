import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";
import loader from '../../public/loader.json'
import Lottie from "lottie-react";

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)
const location = useLocation()


   if(loading){
    return <Lottie loop={true} animationData={loader} className="max-w-lg h-full text-center mx-auto" />
   }
  if(user){
    return <div>
    {
    children
  }
  </div>
  }
  else{
    return <Navigate to={'/login'}  state={location?.pathname || '/'}></Navigate>
  }
  
};

export default PrivateRoute;