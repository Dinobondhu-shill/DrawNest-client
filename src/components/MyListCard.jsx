import { GiTimeTrap } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { IoStarHalf } from "react-icons/io5";
import { SiShutterstock } from "react-icons/si";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyListCard = ({data}) => {
const {image, item_name, price, processing_time, rating, stockStatus, _id, User_Name, short_description
, subcategory_Name, customization, User_Email} = data;

const handleDelete = _id =>{
Swal.fire({
title: "Are you sure?",
text: "You won't be able to revert this!",
icon: "warning",
showCancelButton: true,
confirmButtonColor: "#3085d6",
cancelButtonColor: "#d33",
confirmButtonText: "Yes, delete it!"
}).then((result) => {
if (result.isConfirmed) {
fetch(`https://drawnest-sever.vercel.app/artCollection/${_id}`,
{
method:"DELETE",

}
)
.then(res=> res.json())
.then(data=>{
console.log(data)
if(data.deletedCount > 0){
Swal.fire({
title: "Deleted!",
text: "Your file has been deleted.",
icon: "success"
});
}
})

}
});
}

return (
<div className=" my-5">

  <div>

    <div className="px-4 md:px-10 lg:px-24 py-2 flex flex-col md:flex-row  gap-10 border-y-2 border-[#5bafa5] rounded-xl">
      <div className="md:w-1/5 md:border-r-2 flex items-center ">
        <img src={image} className="max-h-40 md:mr-5 rounded-xl" alt="" />
      </div>
      <div className="border-x-2 px-5 md:w-4/6">
        <h3 className="font-fajila text-center text-2xl mt-4 text-[#5bafa5]">{item_name}</h3>
        <div className="flex items-center justify-between mt-3 pb-4  border-b-2 border-dashed">
          <p className="flex gap-3 items-center font-fajila text-[18px] text-[#5bafa5]">
            <IoStarHalf /> {rating}</p>
          <p className="flex gap-3 items-center font-fajila text-[18px]  ">
            <SiShutterstock />{stockStatus}</p>
        </div>
        <p className="font-lobister text-2xl my-4 text-[#0a1717]  w-fit"># {subcategory_Name}</p>
        <div className="flex justify-between items-center mt-4 border-t-2 border-dotted pt-4">
          <p className="flex gap-3 items-center font-fajila text-[18px] ">
            <GrMoney /> {price} </p>
          <p className="flex gap-3 items-center font-fajila text-[18px] ">Customization: {customization}</p>
          <p className="flex gap-3 items-center font-fajila text-[18px] text-[#5bafa5]">
            <GiTimeTrap /> {processing_time}</p>
        </div>
      </div>
      <div className="flex md:flex-col  gap-5 justify-center items-center md:w-1/6 md:border-l-2">
        <button onClick={()=> handleDelete(_id)}
          data-tip="Delete" className="w-16 tooltip h-16 text-3xl flex items-center justify-center border rounded">
          <MdDelete /></button>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <Link data-tip="Update" to={`/update/${_id}`} className="w-16 h-16 tooltip tooltip-bottom text-3xl flex items-center justify-center  border rounded">
          <CiEdit /></Link>
      </div>
    </div>

  </div>
</div>
);
};

export default MyListCard;