import React from 'react'
import B from '../../assets/b.jpg'
import C from '../../assets/c.jpg'
import D from '../../assets/d.jpg'

import './testimonial.css'

// import {  useState } from 'react';

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
    image: B,
    name:'Chika Okere',
    review: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima, illo, saepe officiis voluptates mollitia dolorum quas, delectus architecto quidem quasi molestias veritatis at ullam. Magnam odio mollitia consequuntur numquam!'
  },
  {
    id : 2,
    image: C,
    name:'James Abiodun',
    review: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat minima, illo, saepe officiis voluptates mollitia dolorum quas, delectus architecto quidem quasi molestias veritatis at ullam. Magnam odio mollitia consequuntur numquam!'
  },
  {
    id : 3,
    image: D,
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
        data.map(({avatar, name, image, review}, index) =>{
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={image} alt="" />
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