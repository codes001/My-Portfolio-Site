import {useEffect} from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/dp.png'
import ME2 from '../../assets/prince-no-bg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeaderSocials from './HeaderSocials'
import {TypeAnimation} from 'react-type-animation'


const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="3000"
        >Prince Effiong</h1>
       
        <TypeAnimation className='text-light'
          sequence = {
            [

              'Software Developer', 'Product Designer', 'Algorithmic Trader'
            ]
          }
          wrapper ='span'
          speed={500}
          repeat= {Infinity}
         />
        <CTA />
        <HeaderSocials 
       
        />
        <div className="me"
       
        >
          <img src={ME2} alt="me" 
           data-aos="fade-up"
           data-aos-delay="50"
           data-aos-duration="3000"
          />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header