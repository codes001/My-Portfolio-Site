import React from 'react'
import Slider from "react-slick";
import B from '../../assets/b.jpg'
import C from '../../assets/c.jpg'
import D from '../../assets/d.jpg'

import './testimonial.css'

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
  const SimpleSlider =() => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

export default Testimonial