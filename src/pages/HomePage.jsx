import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import photo from '../../public/Wave.svg'
import { useEffect, useState } from "react";
import ArtAndCraftCard from "../components/ArtAndCraftCard";


const HomePage = () => {
  const [artCollection, setArtCollection] = useState([])
useEffect(()=>{
  fetch('http://localhost:5000/artCollection')
  .then(res=> res.json())
  .then(data=> setArtCollection(data))
},[])

  return (
    <div className="w-full mx-auto relative">
<div className="absolute -top-10 left-0 w-full">
<img src={photo} alt="" className='max-h-72 w-full rotate-180'/>
  </div>
  <Banner></Banner>
      <NewsLetter></NewsLetter>
      <div className="px-24 my-10 ">
        <h3 className="font-extrabold text-5xl font-fajila border-b-2 w-fit pb-3 text-[#5bafa5]">Browse Our Collection</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {
        artCollection.slice(0, 6).map(item => <ArtAndCraftCard key={item._id} item={item}></ArtAndCraftCard>)
      }
      </div>
      </div>
      <img src={photo} alt="" className='max-h-72 w-full'/>
    </div>
  );
};

export default HomePage;