import React from 'react'
import { BiSolidFolderOpen } from 'react-icons/bi'
import { TbWorld } from 'react-icons/tb'
import { BsGithub } from 'react-icons/bs'
import API from '../../assets/portfolio/api.jpg'
import NESREA from '../../assets/portfolio/nesrea.jpg'
import PRYBERTO from '../../assets/portfolio/pryberto.jpg'
import WHATSAPP from '../../assets/portfolio/whatsapp.jpg'

import './portfolio.css'

const data = [
  {
    id : 1,
    image: API,
    title:'A full stack application built with HTML, CSS, Javascript & Python',
    github: 'https://github.com/codes001/API_2.git',
    demo: 'https://api-2.netlify.app/'
  },
  {
    id : 2,
    image: NESREA,
    title:'A clone of Nigerian based environmental agency',
    github: 'https://nesrea.netlify.app/',
    demo: 'https://github.com/codes001/nesrea.git'
  },
  {
    id : 3,
    image: PRYBERTO,
    title:'Technology based company, get solutions readily available',
    github: 'https://github.com/codes001/Pryberto.git',
    demo: 'https://prybertocode.netlify.app/'
  },
  {
    id : 4,
    image: WHATSAPP,
    title:'Rebuilding Whatsapp User Interface with just HTML and CSS',
    github: 'https://github.com/codes001/Whatsapp-clone.git',
    demo: 'https://whatsapp-web-clone-2.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='work'>
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image,title, github, demo}) =>{
          return(
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="{title}" />
          </div>
          <h3>{title}</h3>

          <div className="portfolio__item-cta">

          <a href={github} target='_blank' className='btn'><TbWorld/></a>
          <a href={demo} target='_blank' className='btn btn-primary'><BsGithub/></a>
          </div>
        </article>        
          )
        })
       }
       
      </div>
    </section>
  )
}

export default Portfolio