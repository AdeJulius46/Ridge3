import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  EffectCoverflow, Pagination, Autoplay  } from 'swiper/modules';

// SwiperCore.use([EffectCoverflow, Pag/ination, Autoplay]);

const Carousel = () => {
  const swiperParams = {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  const images = [
    {
      head:'BIO STOVE',
      image:'Images/jul.png'
    },
    {
      head:'96% FOOD GRADE',
      image:'Images/jul3.png'
    },
    {
      head:'E10 to E90 Fuel Grade Ethanol',
      image:'Images/jul2.png'
    },
    {
      head:'BIO STOVE',
      image:'Images/jul.png'
    },
    {
      head:'E10 to E90 Fuel Grade Ethanol',
      image:'Images/jul2.png'
    },
    {
      head:'96% FOOD GRADE',
      image:'Images/jul3.png'
    }
  ];

  return (
    <Swiper {...swiperParams} 
    className='bg-[#FFC655] text-white  text-center  myswipper'
    modules={[Pagination,EffectCoverflow,Autoplay ]}
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    coverflowEffect={{
      rotate:0,
      stretch:0,
      depth:100,
      modifier:3,
      slideShadows:true
    }}
    loop={true}
    pagination={{clickable:true}}
    slidesPerView={2} 
    >

      {images.map((image, index) => (
        <SwiperSlide key={index} className='myswipper-slid text-black flex justify-center content-center '>
          <img src={image.image}  className='myswipper-slider' alt={`Image ${index + 1}`} />
          <h1 className='text-[8px] self-center  text-center  md:text-[20px] md:ml-8'>{image.head}</h1>
        </SwiperSlide>
        
      ))}
    </Swiper>
  );
};

export default Carousel;
