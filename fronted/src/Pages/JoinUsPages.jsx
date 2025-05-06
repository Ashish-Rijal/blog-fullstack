import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay} from 'swiper/modules';
import PerViewCarousel from '../Components/PerViewCarousel';

export default function JoinUsPages() {
  return (
    <div className='space-y-12'>
       
      
      <Swiper
       loop={true}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
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
        <PerViewCarousel/>

    </div>
  )
}
