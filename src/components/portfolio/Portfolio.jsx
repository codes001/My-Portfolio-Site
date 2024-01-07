import {useEffect} from 'react'
import { BiSolidFolderOpen } from 'react-icons/bi'
import { TbWorld } from 'react-icons/tb'
// import { BsGithub } from 'react-icons/bs'
import API from '../../assets/portfolio/api.jpg'
import NESREA from '../../assets/portfolio/nesrea.jpg'
import WHATSAPP from '../../assets/portfolio/whatsapp.jpg'
import INSURE from '../../assets/portfolio/insure.png'
import JERRY from '../../assets/portfolio/jerry.png'
import AGRO from '../../assets/portfolio/agro.png'
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'
import './portfolio.css'

const data = [
  {
    id : 1,
    image: API,
    title:'A full stack application built with HTML, CSS, Javascript & Python',
    // github: 'https://github.com/codes001/API_2.git',
    demo: 'https://api-2.netlify.app/'
  },
  {
    id : 2,
    image: NESREA,
    title:'A clone of Nigerian based environmental agency',
    // github: 'https://github.com/codes001/nesrea.git',
    demo: 'https://nesrea.netlify.app/'
  },
  {
    id : 3,
    image: INSURE,
    title:'An insurance sales management tool',
    // github: 'https://github.com/TiideLab-Team-Euvola/INSure.git',
    demo: 'https://insure-personal-git-alice-home-alice2212.vercel.app/'
  },
  {
    id : 4,
    image: WHATSAPP,
    title:'Rebuilding Whatsapp User Interface with just HTML and CSS',
    // github: 'https://github.com/codes001/Whatsapp-clone.git',
    demo: 'https://whatsapp-web-clone-2.netlify.app/'
  },
  {
    id : 5,
    image: JERRY,
    title:'Personal portfolio site for a Data Scientist/ Algoritmetic Trader',
    // github: 'https://github.com/codes001/jerry-inyang.git',
    demo: 'https://jerry-inyang.netlify.app/'
  },
  {
    id : 6,
    image: AGRO,
    title:'Offical website of AGRO INNOVATION AND TECHNOLOGY FOR RURAL AREAS INITIATIVE(Agrointec)',
    // github: 'https://github.com/codes001/jerry-inyang.git',
    demo: 'https://agrointec.netlify.app/'
  }
]

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <section id='work'>
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image,title, github, demo}) =>{
          return(
            <article key={id} className="portfolio__item"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="3000"
            >
          <div className="portfolio__item-image"
          
          >
            <img src={image} alt="{title}" />
          </div>
          <h3>{title}</h3>

          <div className="portfolio__item-cta">

          <a href={demo} target='_blank' className='btn'><TbWorld/>Live Demo</a>
          {/* <a href={github} target='_blank' className='btn btn-primary'><BsGithub/></a> */}
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