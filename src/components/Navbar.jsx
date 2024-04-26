import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseProvider";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

console.log(user);
 const Navbar = <>
 <NavLink to={'/'}
  style={({ isActive,}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "#206463b1" : "black",
      
    };
  }}>Home</NavLink>
  <NavLink to={'/'}
  style={({ isActive,}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "#206463b1" : "black",
      
    };
  }}>Art & Craft Item</NavLink>
  {
    user && <NavLink to={"/add-item"}
    style={({ isActive,}) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isActive ? "#206463b1" : "black",
        
      };
    }}>Add Craft Item</NavLink>
  }
  {
    user && <NavLink to={'/'}
    style={({ isActive,}) => {
      return {
        fontWeight: isActive ? "bold" : "",
        color: isActive ? "#206463b1" : "black",
        
      };
    }}>My Art&Craft List</NavLink>
  }
  
 </>
  
  return (
    <div className="navbar bg-[#42C8C6] pt-5 px-24 font-lobister">

  <div className="flex-1">
    <Link to={"/"} className=" text-3xl  font-bold">Draw<span className="text-[#206463b1]">Nest</span></Link>
  </div>
  <div className="dropdown lg:hidden z-30">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {Navbar}
      </ul>
    </div>
    <div className="flex-0 hidden lg:block mr-4">
      <ul data-aos="flip-left" data-aos-duration="1000" className="flex gap-4">
        {Navbar}
      </ul>
    </div>
  <div className="flex-none gap-2">
    
  {
        user ? <>
        <div  data-tip={user?.displayName}  className="btn-circle avatar tooltip ml-3">
          <div className="w-10 rounded-full " >
            <img data-aos="zoom-in" data-aos-delay="50" src={user?.photoURL}/>
          </div>
        </div>
      
      <Link data-aos="fade-up-left"
       onClick={()=> logOut()} 
      className="btn bg-[#206463b1] text-white  font-bold hover:bg-[#206463b1]">Log out</Link>
        </>  : < >
        <Link data-aos="fade-up-left" to={'/login'} className="btn bg-[#206463b1] text-white ml-2 font-bold hover:bg-[#2e6261be]">Log In</Link>
        <Link data-aos="fade-up-left" to={'/register'} className="btn bg-[#206463b1] text-white  font-bold hover:bg-[#2e6261be]">Sign Up</Link>
        </>
      }

  </div>
</div>
  );
};

export default Navbar;