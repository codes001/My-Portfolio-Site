import React from 'react'
import { BiHomeCircle } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import {BiSolidFolderOpen} from 'react-icons/bi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { useState } from 'react'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeCircle/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience"onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#work" onClick={()=> setActiveNav('#work')} className={activeNav === '#work' ? 'active' : ''}><BiSolidFolderOpen/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FaFacebookMessenger/></a>
    </nav >
  )
}

export default Nav