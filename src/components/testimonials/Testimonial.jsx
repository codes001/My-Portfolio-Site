import React from 'react'
import ME from '../../assets/dp.jpg'

import './testimonial.css'

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination} from 'swiper/modules';


const data = [
  {
    id : 1,
    image: ME,
    name:'Sir Wanksalot',
    review: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima, illo, saepe officiis voluptates mollitia dolorum quas, delectus architecto quidem quasi molestias veritatis at ullam. Magnam odio mollitia consequuntur numquam!'
  },
  {
    id : 2,
    image: ME,
    name:'Jerry',
    review: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima, illo, saepe officiis voluptates mollitia dolorum quas, delectus architecto quidem quasi molestias veritatis at ullam. Magnam odio mollitia consequuntur numquam!'
  },
  {
    id : 3,
    image: ME,
    name:'Prince',
    review: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima, illo, saepe officiis voluptates mollitia dolorum quas, delectus architecto quidem quasi molestias veritatis at ullam. Magnam odio mollitia consequuntur numquam!'
  }
  
]


const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Client Reviews</h5>
      <h1>Testimonials</h1>

      <Swiper className="container testimonials__container mySwiper"
      spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        
      >
       {
        data.map(({avatar, name, review}, index) =>{
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={ME} alt="" />
            </div>
              <h5 className="client__name">{name}</h5>
              <p className="client__review">
                {review}
              </p>
          </SwiperSlide>
          )
        })
       }
     
      </Swiper>
    </section>
  )
}

export default Testimonial