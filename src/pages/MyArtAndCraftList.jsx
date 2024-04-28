import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const MyArtAndCraftList = () => {
  const mydata = useLoaderData();
console.log(mydata);
  return (
    <div>
      <Helmet>
        <title>My Added Items | DrawNest</title>
      </Helmet>
      {
       mydata && mydata?.map(data => <myData)
      }
    </div>
  );
};

export default MyArtAndCraftList;