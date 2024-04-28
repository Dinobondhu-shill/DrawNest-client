import { Helmet } from "react-helmet-async";
import photo from '../../public/Wave.svg'
import Lottie from "lottie-react"
import flower from "../../public/lottie.json"
import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import Swal from 'sweetalert2'





const AddArtAndCraft = () => {
  const {user} = useContext(AuthContext)




const handleAddItem = e =>{
  e.preventDefault();
  const form = e.target;
  const item_name = form.name.value
const customization = form.customization.value;
const User_Email = form.email.value;
const User_Name = form.userName.value;
const rating = form.rating.value;
const price = form.rating.value;
const subcategory_Name = form.subCategory.value;
const short_description = form.description.value;
const processing_time = form.time.value;
const stockStatus = form.status.value;
const image = form.image.value


const item = {item_name, customization, User_Email, User_Name, rating, price, short_description, subcategory_Name, processing_time, stockStatus, image}


  fetch('http://localhost:5000/artCollection',
{
  method: "POST",
  headers:{
    "content-type" : "application/json"
  },
  body: JSON.stringify(item)
})
  .then(res=> res.json())
  .then(data=> {
    console.log(data)
    if(data.insertedId){
      
      Swal.fire({
        title: 'Success!',
        text: 'Item added Successfully',
        icon: 'success',
        confirmButtonText: 'Thank you'
      })
      form.reset()
    }
    
  })
}

return (
<div className=" w-full h-full z-10">
  <Helmet>
    <title>Add Your Craft Item | DrawNest</title>
  </Helmet>
  <div className="px-4 md:px-10 lg:px-24 py-5 w-full flex items-center justify-center ">
    <h2 className=" text-3xl font-fajila">Do you want to Add Item? </h2>
    <Lottie loop={true} animationData={flower} className="w-40" />
  </div>

  {/* form handle */}

  <div className="px-4 md:px-10 lg:px-24">
    <form onSubmit={handleAddItem}>
      {/* form row-1 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Item Name:</h5>
          <input type="text" name="name" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
          
        </div>
        
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Customization:</h5>
          <select name="customization" className="select select-bordered w-full">
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>
           
        </div>
       
      </div>
      {/* form row-2 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">SubCategory Name:</h5>
          <input type="text" name="subCategory" placeholder="Enter SubCategory Name"
            className="input input-bordered w-full" />
        
        </div>
        
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Price:</h5>
          <input type="text" name="price" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
         
        </div>
        
      </div>
      {/* form row-3 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Short Description:</h5>
          <input type="text" name="description" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
       
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Rating:</h5>
          <input type="text" name="rating" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
           
        </div>
       
      </div>
      {/* form row-4 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Processing Time:</h5>
          <input  type="text" name="time" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
            
        </div>
        
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Stock Status:</h5>
          <select name="status" className="select select-bordered w-full">
    <option value="inStock">In Stock</option>
    <option value="sold">Made to order</option>
  </select>
        </div>
       
      </div>
      {/* form row-5 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">User Name:</h5>
          <input type="text" name="userName" disabled defaultValue={user?.displayName} placeholder="Enter Item Name"
            className="input input-bordered w-full" />
           
        </div>
        
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">User Email:</h5>
          <input disabled name="email" type="text" defaultValue={user?.email} placeholder="Enter Item Name"
            className="input input-bordered w-full" />
            
        </div>
       
      </div>
      {/* form row-5 */}
      <div className="w-full">
        <div className="mb-2">
          <h5 className="font-bold text-lg pl-2">PhotoURL:</h5>
          <input  type="text" name="image"  placeholder="Enter Item Name"
            className="input input-bordered w-full" />
            
        </div>
        
      </div>
    
      <button  type="submit"  className="btn btn-block  hover:bg-[#206463b1] "> submit </button>
    </form>
  </div>
  <img src={photo} alt="" className="h-[200px] w-full " />
</div>
);
};

export default AddArtAndCraft;