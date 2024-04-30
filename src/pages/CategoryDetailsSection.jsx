import { useLoaderData } from "react-router-dom";


const CategoryDetailsSection = () => {
  const item = useLoaderData()
  console.log(item)
  return (
    <div>
      hello from category 
    </div>
  );
};

export default CategoryDetailsSection;