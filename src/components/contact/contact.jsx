import React, { useRef, useEffect, useState } from 'react'
import { BiMailSend } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import 'react-notifications/lib/notifications.css'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import emailjs from "@emailjs/browser";
import AOS from 'aos'
import { toast } from 'react-toastify'
import 'aos/dist/aos.css'
import './contact.css'


const Contact = () => {
  //FORM VALIDATION
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
 

  const [text, setText] = useState('');
  const [textError, setTextError] = useState('');


  const validateEmail = (inputEmail) => {
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    setTextError('')
  };
  

//EMAILJS
 const form = useRef();
 const serviceID = 'service_qdpl7zo'
 const templateID = 'template_ha33hoo'

  useEffect (()=> emailjs.init('7jl6uocNFTV__p0Tp'), [])

  //Handle form submission
  const handleSubmit = async (e) =>{
    
    // Prevent page refresh on submit
    e.preventDefault();
   
    // Validate name
    if (name.trim() === '') {
      // setNameError('*Name is required');
      toast.error('Name is required')
      return;
    }

    // Validate textarea
    if(text.trim() === ''){
      toast.error('Please drop a message')
      return;
    }

    // Validate email
    if (email.trim() === '') {
      // setEmailError('*Email is required');
      toast.error('Email is required')
      return;
    } else if (!validateEmail(email)) {
      // setEmailError('Invalid email address');
      toast.error('Invalid email address')
      return;
    }

    emailjs.sendForm(
      serviceID, templateID, form.current, '7jl6uocNFTV__p0Tp'
    ).then((result)=>{
    toast.success('Form submission successfull!')
      e.target.reset();
      console.log(result)
      
    }, (err)=>{
      console.log('Error:',err)
      e.target.reset();
     if (err){
     
       toast.error('Something went wrong, please try again later')
     }
     
    })

    try{

      setTimeout(() => {
        
        setName('')
        setEmail('')
        setText(
          ''
        )
      }, 2000);
    } catch(error){
      toast.error('Err...Something went wrong')
      console.error('Something went wrong:', error)
    }
    // If all validations pass, you can proceed with form submission or other actions
    console.log('Form submitted successfully:', { name, email , text});
  };



  // AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return ( 
    <section id='contact'>
    <NotificationContainer />
      <h5>Get In Touch</h5>
      <h2 >Contact Me</h2>


      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'

            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="3000"

          >
            <BiMailSend className='contact-option-icon' />
            <h4>Email</h4>
            <a href='mailto:prybertocode@gmail.com' target='_blank' rel="noreferrer" className='btn btn-primary'>Send a message</a>
          </article>

          <article className='contact-option'
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-duration="3000"
          >
            <FaInstagram className='contact-option-icon' />
            <h4>Instagram</h4>

            <a href='https://instagram.com/effiong_prince_?igshid=MzNlNGNkZWQ4Mg==' target='_blank' rel="noreferrer" className='btn btn-primary'>View Profile</a>
          </article>

          <article className='contact-option'
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="3000"
          >
            <BsWhatsapp className='contact-option-icon' />
            <h4>Whatsapp</h4>
            <a href='https://wa.me/08109879768?text=Hello%20Prince,%20I%20am%20---' target='_blank' rel="noreferrer" className='btn btn-primary'>Send a message</a>
          </article>
        </div>
        

        {/* Beginnning of contact form */}
        <form ref={form}
        onSubmit={handleSubmit}
        method='POST'
        data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="3000">
          <input 
            
            type='text' name='user_name' id='user_name' placeholder='Enter your Full Name' value={name} onChange={handleNameChange}/>
          <input         
            type='email' name='user_email' id='user_email' placeholder='Enter your email' value={email} onChange={handleEmailChange} />
           

          <textarea
          value={text}
          onChange={handleTextChange}
          
            name='user_message' rows='7' id='user_message' placeholder='Enter your message' ></textarea>

          <button type="submit"
            className='btn btn-primary'>Submit</button>
        </form>

     

      </div>
    </section>
  )
}
export default Contact



