import React, { useRef, useEffect } from 'react'
import { BiMailSend } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { useFormik } from 'formik'
import emailjs from "@emailjs/browser";
import AOS from 'aos'
import 'aos/dist/aos.css'
import './contact.css'


const Contact = () => {
  const form = useRef();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",

      message: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }



      if (!values.name) {
        errors.name = "Name is required";
      }

      if (!values.message) {
        errors.message = "Your message is required";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      const data = values;
      emailjs
        .send(
          "service_qdpl7zo",
          "template_lzwy5u8",
          data,
          ""
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Thank you for reaching out. We will contact you shortly.");
          },
          (error) => {
            console.log(error.text);
            alert('Something went wrong')
          }
        );
      setSubmitting(false);
      formik.resetForm();
    },
  });


  // AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <section id='contact'>
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
            <a href='https://api.whatsapp.com/send?phone=+2349017129158' target='_blank' rel="noreferrer" className='btn btn-primary'>Send a message</a>
          </article>
        </div>
        {/* End f contact option */}

        {/* Beginnning of contact form */}
        <form ref={form} onSubmit={formik.handleSubmit} data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="3000">
          <input onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            type='text' name='name' placeholder='Enter your Full Name' />
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type='email' name='email' placeholder='Enter your email' />

          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            name='message' rows='7' placeholder='Enter your message' ></textarea>

          <button type="submit"
            disabled={formik.isSubmitting} className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact