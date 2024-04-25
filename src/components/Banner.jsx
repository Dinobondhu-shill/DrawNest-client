
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='mt-10 object-cover px-24'>
      <Swiper className=' h-[300px] md:h-[400px] lg:h-[510px] rounded-md'
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      pagination={{ clickable: true }}
    >
    <SwiperSlide className='relative'>
        <img src="https://i.postimg.cc/SQzy53w3/pexels-solyartphotos-14332093.jpg
" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        
        <img src="https://i.postimg.cc/cLd0vHrG/pexels-pavel-danilyuk-6925340.jpg
" alt="" />
      </SwiperSlide>
       
      <SwiperSlide>
        <img src="https://i.postimg.cc/KvPmcLc5/pexels-cottonbro-7149339.jpg
" alt="" />
      </SwiperSlide>
     
      <SwiperSlide>
        <img src="https://i.postimg.cc/MK2W8twT/pexels-thatguycraig000-1767016.jpg

" alt="" />
      </SwiperSlide>
      <SwiperSlide >
        <img src="https://i.postimg.cc/dVnvrYyk/pexels-allan-mas-5622353.jpg"  alt="" />
      </SwiperSlide>
    </Swiper>
<div className='absolute top-52 left-56 z-10 text-white'>
  <h1 className='font-lobister text-4xl font-bold text-center'>Step into a World of Color and Imagination! Discover <br /> Masterpieces in Painting and Drawing at Our Creative Haven.</h1>
  <p className='max-w-screen-sm mx-auto text-center mt-4 font-bold mb-24'>Welcome to our vibrant sanctuary of artistic expression! Immerse yourself in a kaleidoscope of paintings and drawings, each telling its own unique story. Let your imagination roam free as you explore our curated collection of creativity. Uncover inspiration, ignite passion, and celebrate the beauty of art with us.</p>
  <div className='flex justify-center '><Link className='border-2 bg-[#206463b1] px-5 py-2 font-fajila text-2xl text-center'>Get Started</Link></div>
</div>

    </div>
  );
};

export default Banner;