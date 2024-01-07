import React from 'react'
import {IoLogoTwitter} from 'react-icons/io'
import {FiLinkedin} from 'react-icons/fi'
import {BsGithub, BsMedium} from 'react-icons/bs'
import {BiLogoUpwork, BiMailSend} from 'react-icons/bi'
import  './footer.css'

const Footer = () => {
  return (
    
    <footer id='footer'>
    <a href='#header' className='footer-logo' data-aos='fade-up'>Prince Effiong</a>


    <div className='footer-socials' data-aos='fade-up'>
      <a href='https://twitter.com/_effiong_prince' target='_blank' rel="noreferrer"><IoLogoTwitter /></a>
      <a href='https://www.linkedin.com/in/prince-effiong' target='_blank' rel="noreferrer"><FiLinkedin /></a>
      <a href='https://github.com/codes001' target='_blank' rel="noreferrer"><BsGithub /></a>
      <a href='https://medium.com/prynzwill147' target='_blank' rel="noreferrer"><BsMedium /></a>
      <a href='mailto:prybertocode@gmail.com' target='_blank' rel="noreferrer"><BiMailSend /></a>
      <a href='https://upwork.com/freelancers/~01ba32ed65c6249544' target='_blank' rel="noreferrer"><BiLogoUpwork /></a>
    </div>

    <div className='footer-copyright'>
      <small>&copy; Pryberto Code. All rights reserved</small>
    </div>
  </footer>
  )
}

export default Footer