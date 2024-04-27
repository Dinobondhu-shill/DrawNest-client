import { useContext, useEffect } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import { Helmet } from "react-helmet-async";


const MyArtAndCraftList = () => {
  const {user} = useContext(AuthContext)
  const email = user.email

  useEffect(()=>{
    fetch(`http://localhost:5000/artCollection/${email}`)
    .then(res=> res.json())
    .then(data=> console.log(data))
  },[email])
  return (
    <div>
      <Helmet>
        <title>My Added Items | DrawNest</title>
      </Helmet>
      <h2>my art and craft</h2>
    </div>
  );
};

export default MyArtAndCraftList;