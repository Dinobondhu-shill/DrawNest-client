import { Link, useLoaderData } from "react-router-dom";
import photo from '../../public/Wave.svg'
import { IoStarHalf } from "react-icons/io5";
import { SiShutterstock } from "react-icons/si";
import { GiTimeTrap } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { FaLocationArrow } from "react-icons/fa6";

const ItemDetails = () => {
  const items = useLoaderData();
  const {image, item_name, price, processing_time, rating, stockStatus, _id, User_Name, short_description
, subcategory_Name} = items
  return (
    <div className="">
      <img src={photo} alt="" className='max-h-40 w-full rotate-180 relative top-0 left-0'/>
      <div className="lg:mx-24 md:mx-10 px-4 py-2 flex flex-col items-center md:flex-row  gap-10 border rounded-xl">
        <div className="w-1/3 md:border-r-2">
        <img src={image} className="max-h-96 rounded-xl" alt="" />
        </div>
        <div className="md:border-l-2 px-5 w-full md:w-2/3">
        <h3 className="font-fajila text-center text-2xl mt-4 text-[#5bafa5]">{item_name}</h3>
        <div className="flex items-center justify-between mt-3 pb-4 mt-5 border-b-2 border-dashed">
        <p className="flex gap-3 items-center font-fajila text-[18px] text-[#5bafa5]"> <IoStarHalf /> {rating}</p>
        <p className="flex gap-3 items-center font-fajila text-[18px]  "> <SiShutterstock />{stockStatus}</p>
      </div>
      <p className="font-lobister text-2xl mb-4 text-[#0a1717] border-b-2 w-fit">{subcategory_Name}</p>
      <p className="font-lobister text-2xl text-[#42C8C6]">{short_description}</p>
      <div className="flex justify-between items-center mt-4 border-t-2 border-dotted pt-4">
        <p className="flex gap-3 items-center font-fajila text-[18px] "><GrMoney /> {price} Tk.</p>
        <p className="flex gap-3 items-center font-fajila text-[18px] text-[#5bafa5]"><GiTimeTrap /> {processing_time}</p>
      </div>
      <div className="my-5 flex item-center justify-between">
        <h3 className="font-bold mt-2">Added By: {User_Name}</h3>
      <Link className="py-3 px-6 w-fit flex items-center gap-5 font-bold font-lobister text-xl hover:text-white hover:bg-[#5bafa5] rounded-lg border border-[#5bafa5]">Purchase Now <FaLocationArrow /> </Link>
        </div>
        </div>
        
      </div>
      <img src={photo} alt="" className='max-h-72 w-full '/>
    </div>
  );
};

export default ItemDetails;