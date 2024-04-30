import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import photo from '../../public/Wave.svg'
import { useEffect, useState } from "react";
import ArtAndCraftCard from "../components/ArtAndCraftCard";
import { Helmet } from "react-helmet-async";
import CategoryCard from "../components/CategoryCard";


const HomePage = () => {
  const [artCollection, setArtCollection] = useState([])
useEffect(()=>{
  fetch('https://drawnest-sever.vercel.app/artCollection')
  .then(res=> res.json())
  .then(data=> setArtCollection(data))
},[])

  return (
    <div className="w-full mx-auto relative">
       <Helmet>
        <title>Home | DrawNest</title>
      </Helmet>
<div className="absolute -top-10 left-0 w-full">
<img src={photo} alt="" className='max-h-40 md:max-h-72 w-full rotate-180'/>
  </div>
  <Banner></Banner>
      
      <div className="px-2 md:px-10 lg:px-24 mb-10 mt-16 ">
        <h3 className="font-extrabold text-5xl font-fajila border-b-2 w-fit pb-3 text-[#5bafa5]">Browse Our Collection</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {
        artCollection.slice(0, 6).map(item => <ArtAndCraftCard key={item._id} item={item}></ArtAndCraftCard>)
      }
      </div>
      </div>
      <div>
      <div className="px-2 md:px-10 lg:px-24 mb-10 mt-16 ">
        <h3 className="font-extrabold text-5xl font-fajila border-b-2 w-fit pb-3 text-[#5bafa5]">Our Categories:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {
        artCollection.slice(0, 6).map(item => <CategoryCard key={item._id} item={item}></CategoryCard>)
      }
      </div>
      </div>
      </div>

      <NewsLetter></NewsLetter>
      <img src={photo} alt="" className='max-h-40 md:max-h-72 w-full'/>
    </div>
  );
};

export default HomePage;