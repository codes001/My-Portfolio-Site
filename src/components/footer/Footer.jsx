import React from 'react'
import {IoLogoTwitter} from 'react-icons/io'
import {FiLinkedin} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import  './footer.css'

const Footer = () => {
  return (
    
    <footer id='footer'>
    <a href='#header' className='footer-logo' data-aos='fade-up'>Prince Effiong</a>


    <div className='footer-socials' data-aos='fade-up'>
      <a href='https://twitter.com/' target='_blank' rel="noreferrer"><IoLogoTwitter /></a>
      <a href='https://www.linkedin.com/in/' target='_blank' rel="noreferrer"><FiLinkedin /></a>
      <a href='https://github.com/codes001' target='_blank' rel="noreferrer"><BsGithub /></a>
    </div>

    <div className='footer-copyright'>
      <small>&copy; Pryberto Code. All rights reserved</small>
    </div>
  </footer>
  )
}

export default Footer