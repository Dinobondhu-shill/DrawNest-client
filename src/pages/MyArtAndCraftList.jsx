import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import MyListCard from "../components/MyListCard";

const MyArtAndCraftList = () => {
  const mydata = useLoaderData();
console.log(mydata)
  return (
    <div>
      <Helmet>
        <title>My Added Items | DrawNest</title>
      </Helmet>
      {
       mydata && mydata?.map(data => <MyListCard key={data._id} data={data}></MyListCard>)
      }
    </div>
  );
};

export default MyArtAndCraftList;