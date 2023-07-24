import React from 'react'
import { BiMailSend } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import 'animate.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact' data-aos='fade-up'>
      <h5 data-aos='fade-up'>Get In Touch</h5>
      <h2 data-aos='fade-up' >Contact Me</h2>
      

      <div className='container contact-container animate__zoomInRight' data-aos='fade-up'>
        <div className='contact-options'>
          <article className='contact-option' data-aos='fade-up'>
            <BiMailSend className='contact-option-icon'/>
            <h4>Email</h4>
            <a href='mailto:prybertocode@gmail.com' target='_blank' rel="noreferrer" className='btn btn-primary'>Send a message</a>
          </article>

          <article className='contact-option' data-aos='fade-up'>
            <FaInstagram className='contact-option-icon'/>
            <h4>Instagram</h4>

            <a href='https://instagram.com/effiong_prince_?igshid=MzNlNGNkZWQ4Mg==' target='_blank' rel="noreferrer" className='btn btn-primary'>Send a message</a>
          </article>

          <article className='contact-option'>
            <BsWhatsapp className='contact-option-icon'/>
            <h4>Whatsapp</h4>
            <a href='https://api.whatsapp.com/send?phone=+2348109879768' target='_blank' rel="noreferrer" className='btn btn-primary'>Send a message</a>
          </article>
        </div>
        {/* End f contact option */}

        {/* Beginnning of contact form */}
        <form ref={form} onSubmit={sendEmail} data-aos='fade-up'>
          <input type='text' placeholder='Your Full Name' name='name' required/>
          <input type='email' placeholder='Your Email' name='email'/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact