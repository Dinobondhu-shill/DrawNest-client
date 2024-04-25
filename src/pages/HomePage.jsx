import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import photo from '../../public/Wave.svg'

const HomePage = () => {
  return (
    <div className="w-full mx-auto">
      <Banner></Banner>
      <NewsLetter></NewsLetter>
      <img src={photo} alt="" className='max-h-72 w-full'/>
    </div>
  );
};

export default HomePage;