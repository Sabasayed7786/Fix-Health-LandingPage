
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { doctorsData } from '../../services/Api';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './TeamSection.css';

const TeamSection = () => {
  return (
    <div className='swiper-container-wrapper'>
        <p style={{color:"white", marginTop:"50px", fontSize:"40px"}}>Meet Our Experts</p>
        <p style={{color:"white",marginTop:"10px",marginBottom:"70px",fontSize:"20px"}}>Experience the Benefits of Advanced Technology and Expert Care</p>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className='swiper-container'
        loop={true}
        autoplay={{
            delay: 1000, 
            disableOnInteraction: false, 
          }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {doctorsData.map((item, index) => (
          <SwiperSlide key={index} className='swiper-slide'>
            <div>
              <img src={item.link} alt={`Image-doctor`} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.specialty}</p>
                <p>{item.city}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSection;
