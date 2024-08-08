import React, { useEffect } from 'react'
import { BsGit, BsGithub } from 'react-icons/bs'
import './experience.css'
import { FaFigma, FaHtml5, FaNode, FaPython, FaReact } from 'react-icons/fa'
import { BiLogoCss3, BiLogoJavascript, BiLogoMongodb, BiLogoTailwindCss } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaVuejs } from 'react-icons/fa'
import { BsWordpress } from 'react-icons/bs'
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  
  return (
    <section id='experience'>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend "
         data-aos="fade-up"
         data-aos-delay="50"
         data-aos-duration="2000"
        >
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div>
              <FaHtml5 className='experience__details-icon' />
              <article className="experience__details">
                <h4>HTML</h4>
               
              </article>
            </div>
            <div>
              <BiLogoCss3 className='experience__details-icon' />
              <article className="experience__details">
                <h4>CSS</h4>
                
              </article>
            </div>
            <div>
              <BiLogoJavascript className='experience__details-icon' />
              <article className="experience__details">
                <h4>Javascript</h4>
               
              </article>
            </div>
            <div>
              <BiLogoTailwindCss className='experience__details-icon' />
              <article className="experience__details">
                <h4>TailwindCSS</h4>
                
              </article>
            </div>

            <div>
              <FaReact className='experience__details-icon' />
              <article className="experience__details">
                <h4>React JS</h4>
                
              </article>
            </div>
            <div>
              <TbBrandNextjs className='experience__details-icon' />
              <article className="experience__details">
                <h4>Next JS</h4>
                
              </article>
            </div>

            <div>
              <FaVuejs className='experience__details-icon' />
              <article className="experience__details">
                <h4>Vue JS</h4>
                
              </article>
            </div>
          </div>
        </div>

        <div className="experience__backend"
         data-aos="fade-down"
         data-aos-delay="50"
         data-aos-duration="2000"
        >
          <h3>Other SKills</h3>
         <div className="experience__content">
         <div>
            <BiLogoMongodb className='experience__details-icon' />
            <article className="experience__details">
              <h4>Mongo DB</h4>
             
            </article>
          </div>
          <div>
            <FaPython className='experience__details-icon' />
            <article className="experience__details">
              <h4>Python</h4>
              
            </article>
          </div>
          <div>
            <FaFigma className='experience__details-icon' />
            <article className="experience__details">
              <h4>Figma</h4>
              
            </article>
          </div>

          <div>
            <BsWordpress className='experience__details-icon' />
            <article className="experience__details">
              <h4>Wordpress</h4>
              
            </article>
          </div>
          <div>
            <BsGit className='experience__details-icon' />
            <article className="experience__details">
              <h4>Git</h4>
              
            </article>
          </div>
          <div>
            <FaNode className='experience__details-icon' />
            <article className="experience__details">
              <h4>Node JS</h4>
              
            </article>
          </div>
          <div>
            <BsGithub className='experience__details-icon' />
            <article className="experience__details">
              <h4>Github</h4>
              
            </article>
          </div>
         

         </div>
        </div>

       
      </div>
    </section>
  )
}

export default Experience