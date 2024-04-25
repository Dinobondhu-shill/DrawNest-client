import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className='flex flex-col gap-5 text-center justify-center items-center my-20 w-full h-full'>
      <h2 className='text-5xl text-red-400 font-manrope font-extrabold'>Opppss!</h2>
      <p className='text-3xl text-red-500 font-manrope'>Something is wrong, Please try later....</p>
    <Link to='/' className="px-5 py-3 border-2 rounded-2xl border-green-300 w-fit text-center">Go back to home</Link>
    </div>
  );
};

export default ErrorPage;