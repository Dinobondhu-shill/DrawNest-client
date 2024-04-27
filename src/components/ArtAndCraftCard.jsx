import { Link } from "react-router-dom";
import { GrMoney } from "react-icons/gr";
import { GiTimeTrap } from "react-icons/gi";
import { IoStarHalf } from "react-icons/io5";
import { SiShutterstock } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa6";

const ArtAndCraftCard = ({item}) => {
  const {image, item_name, price, processing_time, rating, stockStatus, _id } = item
  return (
    <div className="border p-3 rounded-md hover:scale-105 ">
       
      <div>
        <img src={image} alt="" className="w-full max-h-[300px] object-cover "/>
      </div>
      <h3 className="font-fajila text-xl mt-4 text-[#5bafa5]">{item_name}</h3>
      <div className="flex justify-between items-center mt-4">
        <p className="flex gap-3 items-center font-fajila text-[18px] "><GrMoney /> {price}</p>
        <p className="flex gap-3 items-center font-fajila text-[18px] text-[#5bafa5]"><GiTimeTrap /> {processing_time}</p>
      </div>
      <div className="flex items-center justify-between mt-3 my-5">
        <p className="flex gap-3 items-center font-fajila text-[18px] text-[#5bafa5]"> <IoStarHalf /> {rating}</p>
        <p className="flex gap-3 items-center font-fajila text-[18px]  "> <SiShutterstock />{stockStatus}</p>
      </div>
      <div className="my-4 flex items-center justify-center">
      <Link to={`/artCollection/${_id}`} className="py-3 px-6 flex items-center gap-5 font-bold font-lobister text-xl hover:text-white hover:bg-[#5bafa5] rounded-lg border border-[#5bafa5]">View Details <FaLocationArrow /> </Link>
      </div>
    </div>
  );
};

export default ArtAndCraftCard;