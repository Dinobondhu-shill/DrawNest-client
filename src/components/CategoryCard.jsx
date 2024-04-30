import { Link } from "react-router-dom";


const CategoryCard = ({item}) => {
  const {item_name, image, category} = item

  return (
    <Link to={`/artCollection/category/${category}`} className='w-80 h-64 border rounded-md hover:scale-105'>
      <div className="relative">
        <img src={image} className='w-80 h-64 object-cover' />
        <h3 className="absolute top-1/3 left-10 font-bold text-3xl text-[#6d6e6e] text-center">{item_name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;