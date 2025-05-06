import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay} from 'swiper/modules';

export default function PerViewCarousel() {
  return (
    <div className=''>
       
      
      <Swiper
       loop={true}
       slidesPerView={3}
       spaceBetween={30}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        
        
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='h-[80vh] w-full object-cover' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[80vh] w-full object-cover' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[80vh] w-full object-cover' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[80vh] w-full object-cover' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    

    </div>
  )
}
