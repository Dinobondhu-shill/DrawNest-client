import { useEffect, useState } from 'react';
import ArtAndCraftCard from '../components/ArtAndCraftCard';
import photo from '../../public/Wave.svg'
import { Helmet } from 'react-helmet-async';

const AllCraftSection = () => {
  const [items, setItems] = useState([])


  useEffect(()=>{
    fetch('http://localhost:5000/artCollection')
    .then(res=> res.json())
    .then(data => setItems(data))
  }, [])
  return (
    <div>
<Helmet>
        <title>All Art & Craft Gallery | DrawNest</title>
      </Helmet>
      <div  className='px-24 my-10'>
      <h3 className='text-3xl font-fajila'>Take a Look Our All Collections</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {
        items.map(item => <ArtAndCraftCard key={item._id} item={item}></ArtAndCraftCard>)
      }
      </div>
      </div>
      <img src={photo} alt="" className='max-h-72 w-full'/>
    </div>
  );
};

export default AllCraftSection;