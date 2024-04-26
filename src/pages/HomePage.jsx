import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import photo from '../../public/Wave.svg'

const HomePage = () => {
  return (
    <div className="w-full mx-auto relative">
<div className="absolute -top-10 left-0 w-full">
<img src={photo} alt="" className='max-h-72 w-full rotate-180'/>
  </div>
  <Banner></Banner>
      <NewsLetter></NewsLetter>
      <img src={photo} alt="" className='max-h-72 w-full'/>
    </div>
  );
};

export default HomePage;