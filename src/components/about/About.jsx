import React, {useEffect} from 'react'
import ME2 from '../../assets/Prince.jpg'
import { FaAward } from 'react-icons/fa'
import { PiUsersThree } from 'react-icons/pi'
import { BiSolidFolderOpen } from 'react-icons/bi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './about.css'

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <section id='about'>
      
      <h5>Know more</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me"
         data-aos="fade-down"
         data-aos-delay="50"
         data-aos-duration="3000"
        >
          <img src={ME2} alt="ME" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card"
             data-aos="fade-right"
             data-aos-delay="200"
             data-aos-duration="2000"
            >
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card"
             data-aos="fade-down"
             data-aos-delay="300"
             data-aos-duration="2000"
            >
              <PiUsersThree className='about__icon' />
              <h5>Clients</h5>
              <small>4+ </small>
            </article>
            <article className="about__card"
             data-aos="fade-left"
             data-aos-delay="50"
             data-aos-duration="2000"
            >
              <BiSolidFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>15+</small>
            </article>

          </div>

          <div
           data-aos="fade-left"
           data-aos-delay="50"
           data-aos-duration="3000"
          >
            <p>
              Welcome to the digital realm, where creativity meets functionality! I'm Effiong Prince,
              a passionate and skilled web developer dedicated build
              responsive websites that bring your ideas to life.
       My journey in the world of coding began with a
              simple fascination for turning lines of code into visually appealing, user-friendly
              websites, and it has since evolved into a commitment to delivering high-quality,
              custom web solutions tailored to your unique needs.
              Whether you're starting from scratch or looking to revamp your existing web
              presence, I'm here to turn your ideas into reality. 
              Feel free to explore my portfolio to see my projects, and don't hesitate to
              reach out. <br />
              LET'S CODE THE FUTURE TOGETHER!

            </p>
            <a href="#contact" className='btn btn-primary' 
             data-aos="bounce-in-right"
             data-aos-delay="50"
             data-aos-duration="2000"
            >Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}



export default About