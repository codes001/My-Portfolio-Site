import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>frontend Development</h3>
          <div className="experience__content">
            <div>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <article className="experience__details">
                <h4>HTML</h4>
                <small className="text-light">
                  Experienced
                </small>
              </article>
            </div>
            <div>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <article className="experience__details">
                <h4>CSS</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </article>
            </div>
            <div>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <article className="experience__details">
                <h4>Javascript</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </article>
            </div>
            <div>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <article className="experience__details">
                <h4>TailwindCSS</h4>
                <small className="text-light">
                  Intermediate
                </small>
              </article>
            </div>

            <div>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <article className="experience__details">
                <h4>React JS</h4>
                <small className="text-light">
                  Beginner
                </small>
              </article>
            </div>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
         <div className="experience__content">
         <div>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <article className="experience__details">
              <h4>MySQL</h4>
              <small className="text-light">
                Beginner
              </small>
            </article>
          </div>
          <div>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <article className="experience__details">
              <h4>Python</h4>
              <small className="text-light">
                Beginner
              </small>
            </article>
          </div>
          <div>
            <BsFillPatchCheckFill className='experience__details-icon' />
            <article className="experience__details">
              <h4>Javascript</h4>
              <small className="text-light">
                Beginner
              </small>
            </article>
          </div>

         </div>
        </div>

       
      </div>
    </section>
  )
}

export default Experience