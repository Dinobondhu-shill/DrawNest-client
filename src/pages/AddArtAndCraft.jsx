import { Helmet } from "react-helmet-async";
import photo from '../../public/Wave.svg'
import Lottie from "lottie-react"
import flower from "../../public/lottie.json"
import { useForm } from "react-hook-form"





const AddArtAndCraft = () => {

const { register, handleSubmit, watch,formState: { errors }} = useForm()
const onSubmit = (data) => console.log(data)
return (
<div className=" w-full h-full z-10">
  <Helmet>
    <title>Add Your Craft Item | DrawNest</title>
  </Helmet>
  <div className="px-24 py-5 w-full flex items-center justify-center ">
    <h2 className=" text-3xl font-fajila">Do you want to Add Item? </h2>
    <Lottie loop={true} animationData={flower} className="w-40" />
  </div>

  {/* form handle */}

  <div className="px-24">
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* form row-1 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Item Name:</h5>
          <input {...register("item_name", { required: true })} type="text" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">PhotoURL:</h5>
          <input {...register("image", { required: true })} type="text" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
      </div>
      {/* form row-2 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Item Name:</h5>
          <input {...register("item_name", { required: true })} type="text" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">PhotoURL:</h5>
          <input {...register("image", { required: true })} type="text" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
      </div>
      {/* form row-3 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Item Name:</h5>
          <input {...register("item_name", { required: true })} type="text" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">PhotoURL:</h5>
          <input {...register("image", { required: true })} type="text" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
      </div>
      {/* form row-4 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Item Name:</h5>
          <input {...register("item_name", { required: true })} type="text" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">PhotoURL:</h5>
          <input {...register("image", { required: true })} type="text" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
      </div>
      {/* form row-5 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Item Name:</h5>
          <input {...register("item_name", { required: true })} type="text" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">PhotoURL:</h5>
          <input {...register("image", { required: true })} type="text" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
      </div>
      {/* form row-6 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Item Name:</h5>
          <input {...register("item_name", { required: true })} type="text" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">PhotoURL:</h5>
          <input {...register("image", { required: true })} type="text" placeholder="Enter Item Name"
            className="input input-bordered w-full" />
        </div>
      </div>
      <input type="submit" />
    </form>
  </div>
  <img src={photo} alt="" className="h-[200px] w-full " />
</div>
);
};

export default AddArtAndCraft;