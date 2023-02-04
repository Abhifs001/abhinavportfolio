import React from 'react'
import './about.css'
import ME from '../../assets/AbhinavPandey.jpg'
import {SiAzuredevops} from 'react-icons/si'
import {FiDatabase} from 'react-icons/fi'
import {GrCloudSoftware} from 'react-icons/gr'
const About = () => {
  return (
   <section id='about' >
          <h5>Get to know </h5>
          <h2>About me</h2>
            <div className="container about_container">
                  <div className="about_me">
                    <div className="about_me-image">
                      <img src={ME} alt="Abhinav-Pandey" />
                    </div>
                  </div>

                    <div className="about_content">
                      <div className="about_cards">
                        <article className="about_card">
                           <h3>Data Science</h3>
                           <SiAzuredevops  className='about_icon' />
                           
                        </article>
                      
                        <article className="about_card">
                           <h3> Technical Writing </h3>
                           <FiDatabase className='about_icon'/>
                           
                        </article>
                     
                      
                        <article className="about_card">
                           <h3>Full Stack Development</h3>
                           <GrCloudSoftware className='about_icon2'/>
                          
                        </article>
                      
                      
                    </div>
                    <p>
                    I belong to Jabalpur, India, pursuing Bachelor in Computer Science & Engineering from Shri Ram Institute if Technology (RGPV University), Bhopal
                    
                    </p>
                   

                  </div>

            </div>
   </section>
  );
}

export default About