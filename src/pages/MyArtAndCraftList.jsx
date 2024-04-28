import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import MyListCard from "../components/MyListCard";
import photo from '../../public/Wave.svg'

const MyArtAndCraftList = () => {
  const mydata = useLoaderData();
 

  return (
    <div >
      <div className=" w-full">
<img src={photo} alt="" className='max-h-72 w-full rotate-180'/>
  </div>
      <Helmet>
        <title>My Added Items | DrawNest</title>
      </Helmet>
      <div className="px-4 md:px-10 lg:px-24 relative -top-60 left-0">
      <div className="my-10">
       <h2 className="text-3xl font-bold font-lobister">Hello, Here is your Added Item .</h2>
       </div> 
      {
       mydata && mydata?.map(data => <MyListCard key={data._id} data={data}></MyListCard>)
      }
    </div>
    <div className=" w-full">
<img src={photo} alt="" className='max-h-72 w-full'/>
  </div>
      </div>
  );
};

export default MyArtAndCraftList;