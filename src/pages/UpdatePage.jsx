import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {
  const updatingItem = useLoaderData()
  const {item_name, customization, User_Email, User_Name, rating, price, short_description, subcategory_Name, processing_time, stockStatus, image, _id} = updatingItem
  
  const handleUpdate = ( e) =>{
    e.preventDefault()
    const form = e.target;
    const item_name = form.name.value
  const customization = form.customization.value;
  const User_Email = form.email.value;
  const User_Name = form.userName.value;
  const rating = form.rating.value;
  const price = form.price.value;
  const subcategory_Name = form.subCategory.value;
  const short_description = form.description.value;
  const processing_time = form.time.value;
  const stockStatus = form.status.value;
  const image = form.image.value;
  const category = form.category.value
  
  const item = {item_name, customization, category, User_Email, User_Name, rating, price, short_description, subcategory_Name, processing_time, stockStatus, image}
  console.log(item)
  fetch(`https://drawnest-sever.vercel.app/artCollection/${_id}`,
  {
    method: "PUT",
    headers:{
      "content-type" : "application/json"
    },
    body: JSON.stringify(item)
  })
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      if(data.modifiedCount){
        
        Swal.fire({
          title: 'Success!',
          text: 'Item Update Successfully',
          icon: 'success',
          confirmButtonText: 'Close'
        })
        form.reset()
      }
      
    })

  }
  return (
    <div className="md:px-10 lg:px-24">
      <div>
            <h3 className="font-bold text-center my-5 text-3xl">Update Your Item</h3>
            <div>
              <form onSubmit={handleUpdate}>
                <div className="w-full flex gap-5">
                  <div className="mb-2 w-1/2">
                    <h5 className="font-bold text-lg pl-2">Item Name:</h5>
                    <input type="text" name="name" defaultValue={item_name} placeholder="Enter Item Name"
                      className="input input-bordered w-full" />

                  </div>

                  <div className="mb-2 w-1/2">
                    <h5 className="font-bold text-lg pl-2">Customization:</h5>
                    <select name="customization" defaultValue={customization} className="select select-bordered w-full">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>

                  </div>

                </div>
                <div className="w-full  flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">PhotoURL:</h5>
          <input type="text" name="image" defaultValue={image} placeholder="Enter Item Name" className="input input-bordered w-full" />

        </div>
        <div className="mb-2 w-1/2">
          <h5 className="font-bold text-lg pl-2">Category:</h5>
          <select name="category" className="select select-bordered w-full">
            <option value="Landscape-Painting">Landscape Painting</option>
            <option value="Portrait-Drawing">Portrait Drawing</option>
            <option value="Watercolour-Painting">Watercolour Painting</option>
            <option value="Oil-Painting">Oil Painting</option>
            <option value="Charcoal-Sketching">Charcoal Sketching</option>
            <option value="Cartoon-Drawing">Cartoon Drawing</option>
          </select>

        </div>
      </div>
                {/* form row-2 */}
                <div className="w-full flex gap-5">
                  <div className="mb-2 w-1/2">
                    <h5 className="font-bold text-lg pl-2">SubCategory Name:</h5>
                    <input type="text" name="subCategory" defaultValue={subcategory_Name} placeholder="Enter SubCategory Name"
                      className="input input-bordered w-full" />

                  </div>

                  <div className="mb-2 w-1/2">
                    <h5 className="font-bold text-lg pl-2">Price:</h5>
                    <input type="text" name="price" defaultValue={price} placeholder="Enter Item Name"
                      className="input input-bordered w-full" />

                  </div>

                </div>
                {/* form row-3 */}
                <div className="w-full flex gap-5">
                  <div className="mb-2 w-1/2">
                    <h5 className="font-bold text-lg pl-2">Short Description:</h5>
                    <input type="text" name="description" defaultValue={short_description} placeholder="Enter Item Name"
                      className="input input-bordered w-full" />
                  </div>

                  <div className="mb-2 w-1/2">
                    <h5 className="font-bold text-lg pl-2">Rating:</h5>
                    <input type="text" name="rating" defaultValue={rating} placeholder="Enter Item Name"
                      className="input input-bordered w-full" />

                  </div>

                </div>
                {/* form row-4 */}
                <div className="w-full flex gap-5">
                  <div className="mb-2 w-1/2">
                    <h5 className="font-bold text-lg pl-2">Processing Time:</h5>
                    <input type="text" defaultValue={processing_time} name="time" placeholder="Enter Item Name"
                      className="input input-bordered w-full" />

                  </div>

                  <div className="mb-2 w-1/2">
                    <h5 className="font-bold text-lg pl-2">Stock Status:</h5>
                    <select name="status" defaultValue={stockStatus} className="select select-bordered w-full">
                      <option value="inStock">In Stock</option>
                      <option value="sold">Made to order</option>
                    </select>
                  </div>

                </div>
                {/* form row-5 */}
                <div className="w-full flex gap-5">
                  <div className="mb-2 w-1/2">
                    <h5 className="font-bold text-lg pl-2">User Name:</h5>
                    <input type="text" name="userName" defaultValue={User_Name} placeholder="Enter Item Name"
                      className="input input-bordered w-full" />

                  </div>

                  <div className="mb-2 w-1/2">
                    <h5 className="font-bold text-lg pl-2">User Email:</h5>
                    <input disabled name="email" type="text" defaultValue={User_Email} placeholder="Enter Item Name"
                      className="input input-bordered w-full" />

                  </div>

                </div>
              
                
                  <button type="submit" className="btn btn-block my-5" 
                    data-tip="Update" >update</button>
                
              </form>
            </div>
          </div>
    </div>
  );
};

export default UpdatePage;