import React, { useState, useEffect } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/Footer'
import Loader from './utils/Loader'
const App = () => {
 

 
  return (
    <>
    <Loader />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />

      <Contact />
      <Footer />
    </>
  )
}

export default App