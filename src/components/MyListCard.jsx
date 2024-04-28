import { GiTimeTrap } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { IoStarHalf } from "react-icons/io5";
import { SiShutterstock } from "react-icons/si";


const MyListCard = ({data}) => {
  const {image, item_name, price, processing_time, rating, stockStatus, _id, User_Name, short_description
    , subcategory_Name} = data
  return (
    <div className="px-24 mt-5">
     <div className="">
      <div className="px-4 py-2 flex  gap-10 border-y-2 border-[#5bafa5] rounded-xl">
        <div className="w-1/5 border-r-2 flex items-center justify-center">
        <img src={image} className="max-h-40 rounded-xl" alt="" />
        </div>
        <div className="border-x-2 px-5 w-4/6">
        <h3 className="font-fajila text-center text-2xl mt-4 text-[#5bafa5]">{item_name}</h3>
        <div className="flex items-center justify-between mt-3 pb-4 mt-5 border-b-2 border-dashed">
        <p className="flex gap-3 items-center font-fajila text-[18px] text-[#5bafa5]"> <IoStarHalf /> {rating}</p>
        <p className="flex gap-3 items-center font-fajila text-[18px]  "> <SiShutterstock />{stockStatus}</p>
      </div>
      <p className="font-lobister text-2xl my-4 text-[#0a1717]  w-fit"># {subcategory_Name}</p>
      <div className="flex justify-between items-center mt-4 border-t-2 border-dotted pt-4">
        <p className="flex gap-3 items-center font-fajila text-[18px] "><GrMoney /> {price} Tk.</p>
        <p className="flex gap-3 items-center font-fajila text-[18px] text-[#5bafa5]"><GiTimeTrap /> {processing_time}</p>
      </div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/6 border-l-2">
          <button>delete</button>
          <button>update</button>
        </div>
      </div>
    
    </div>
    </div>
  );
};

export default MyListCard;