import React from 'react'
import ME from '../../assets/dp.jpg'
import {Zoom} from 'react-reveal/Zoom'
import { FaAward } from 'react-icons/fa'
import { PiUsersThree } from 'react-icons/pi'
import { BiSolidFolderOpen } from 'react-icons/bi'
import './about.css'
import 'animate.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Know more</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="ME" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <PiUsersThree className='about__icon' />
              <h5>Clients</h5>
              <small>4+ </small>
            </article>
            <article className="about__card">
              <BiSolidFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>9+</small>
            </article>

          </div>
          <Zoom>
            <p className='animate__animated animate__zoomInRight' data-aos="fade-up-right">
              Hey! My name is Prince and I'm a web developer, I build responsive web pages and applications with HTML5, CSS3 and Javascript. As a field that is constantly evolving to incorporate new technology, frontend development can reward those who like to learn new things and take up new challenges.
              I'm creative, I'm available for new challenges that can help in problem solving. Also available as a freelancer developer.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </Zoom>
        </div>
      </div>
    </section>
  )
}

export default About