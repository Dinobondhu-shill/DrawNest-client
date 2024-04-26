import { ToastContainer } from 'react-toastify';
import photo from '../../public/Humaaans - 1 Character.png'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { SiFacebook } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import photowave from '../../public/Wave.svg'

const Login = () => {
  
const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div className='bg-[rgb(221,208,208)] mx-52 mt-10 px-10 py-6 rounded-sm text-center'>
      <h2 className='font-dancing text-5xl py-3'>Welcome back to <span className='font-lobister text-7xl'>DrawNest</span></h2> <hr />
      <div className='my-10 flex justify-between w-full'> 
        <img src={photo} alt="" />
        <div className='border-l ml-20 flex flex-col w-1/2 pl-16'>
        <form
className=" flex flex-col gap-3">
<label data-aos="fade-down" data-os-duration="1000" className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input  {...register("Email", { required: true })}
  type="text" className="grow w-full" placeholder="Email" />
</label>
{errors.Email && <span className="text-red-700 font-bold">You must enter your Email</span>}
<ToastContainer></ToastContainer>

<label data-aos="fade-down" data-os-duration="1100" className="input input-bordered flex items-center gap-2 relative">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input {...register("Password", { required: true })}
   type={showPassword? "text": "password"} className="grow" placeholder="Password" />
   <span className="cursor-pointer absolute top-[13px] text-[20px] z-10 right-4" onClick={()=> setShowPassword(!showPassword)}>
          {
          showPassword ? <IoIosEyeOff/> :<IoIosEye/>
        }
          </span>
</label>
{errors.Password && <span className="text-red-700 font-bold">You must enter your Email</span>}

<button  data-aos="zoom-in" type="submit" className=" border font-lobister text-black py-3 rounded-xl font-bold hover:bg-[#206463b1]">Log In</button>
</form>
<p data-aos="fade-left" className="mt-4 text-[16px] pb-4">Don't have an account? <Link to={'/register'} className="underline  text-[#a456a4]">Register</Link></p> <hr />
<h2 data-aos="fade-right" className="font-bold mt-4">Or Continue With:</h2>
<div className="flex justify-between mt-4 ju">
<button
 className="text-4xl"> <FcGoogle /> </button>
<button
 className="text-4xl"> <FaGithub /> </button>
<button
 className="text-4xl"> <SiFacebook /> </button>
</div>
        </div>
      </div>
      
    </div>
    <img src={photowave} alt="" className='max-h-72 w-full'/>
    </div>
  );
};

export default Login;<h2>this is log in page</h2>