import React from 'react'
import './Projectsreal.css'
// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const Data =[
    {
        name:'ShareBay',
        details: 'The Project entitled “ShareBay” is based on the Share Mobility Business Model of Electric Vehicles. It is a Scalable Online Booking of Electric Vehicles through implementation of the MERN Stack. This project aims to develop a full stack web application to provide a fully digitized solution for smaller car rental companies to manage, analyse and distribute their fleet. Due to the wide range of possible requirements, the project will be based on a core set of end-to-end functions that exercise the full depth of a web application stack. '
    }, 

    {
        name:'Email Automation',
        details: 'AI Mailer is the Virtual Assistant (built using Python) for sending emails. It uses Speech Recognition module- Microsoft Speech API (SAPI5) for recognizing the instructions, Tkinter GUI for accepting the email id, Regular Expression for Email Validation and smtplib module for sending mail using TLS Security Layer. ',

    }, 

    {
        name:'Supervised Machine Learning on MNIST Data',
        details: 'A Supervised Machine Learning Model which uses One Vs Rest Classifier Approach for classifying the images of Handwritten Digits (MNIST data) into their exact numeric category. Accurate above 85% for all digits '
    }
    , 

     
]


const Projectsreal = () => {
  return (
    <section id= 'projects'>
        <h5>I endeavor to make every Project as a Product of mine!</h5>
        <h2>Projects</h2>
        <Swiper className="container_projects-real"    
        
        // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
  
      pagination={{ dynamicBullets: true }}
      
        >
           {
               Data.map(({name, details}, index) =>{
                    return (
                        <SwiperSlide key = {index} className="projects-detail">
                        <div className="avtar">
        
                        </div>
                    <h2   >{name}</h2>
                       <small> {details}</small>
                    </SwiperSlide>
                    )
               })
           }
        </Swiper>


    </section>
  )
}

export default Projectsreal