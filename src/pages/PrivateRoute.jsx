import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
  const {user} = useContext(AuthContext)
const location = useLocation()
console.log(location)
  if(user){
    return (
      <div>
        {children}
      </div>
    );
  }
  else{
    return <Navigate to={'/login'}  state={location?.pathname || '/'}></Navigate>
  }
  
};

export default PrivateRoute;