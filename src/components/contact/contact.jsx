import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import  {AiOutlineLinkedin} from 'react-icons/ai'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 


const Contact = () => {
  const form = useRef();
  const notify = () => toast("Message Sent!" , { position: 'top-center',})
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_5iaejys', 'template_mdrcrh7', form.current, '18mif_e3obMv3BjIF')
      .then((result) => {
              
          console.log(result.text);
         setTimeout(()=>{
             window.location.href='/';
         }, 1000)
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
   <section id='contact' >
        <h2>Get in touch</h2>
        <div className="container contact_container">
          <div className="contact_options">
                <article className="contact_option">
                  <MdOutlineMailOutline className="contact_option-icon" />

                  <h4>Email</h4>
                  <h5>info.pandeyabhi31@gmail.com</h5>
                  <a href="mail to:info.pandeyabhi31@gmail.com"  target="_blank"  rel="noreferrer" >Send a message</a>
                </article>
                <article className="contact_option">
                  <AiOutlineLinkedin className="contact_option-icon" />

                  <h4>Linkedin</h4>
                  <h5>Abhinav Pandey</h5>
                  <a href="https://www.linkedin.com/messaging" target="_blank" rel="noreferrer" >Send a message</a>
                 </article>
                 
          </div>
          <form  ref={form}  onSubmit={sendEmail} >
                <input type="text" name='name' id="" placeholder='Your Full Name' required />
                <input type="email" name="email" id="" placeholder='Your emal'  required/>
                <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required  ></textarea>
                <button type='submit'  className='btn btn-primary' onClick={notify}  > Send message<ToastContainer /></button>

          </form>
        </div>
     
   </section>
  )
}

export default Contact