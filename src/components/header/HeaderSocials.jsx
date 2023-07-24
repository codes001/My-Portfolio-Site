import React from 'react'
import {BiLogoLinkedinSquare} from 'react-icons/bi'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className ="header__socials" >
        <a href="https://www.linkedin.com/in/prince-effiong" target='_blank'><BiLogoLinkedinSquare/></a>
        <a href="https://www.github.com/codes001" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com/_effiong_prince" target='_blank'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials