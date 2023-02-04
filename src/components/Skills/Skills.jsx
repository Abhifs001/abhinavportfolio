import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <section id='skills' >
            <h2>Skills</h2>

            <div className="container_Skills">
                   <div className="container_development">
                    <h3>Languages</h3> 
                     <ul>
                      <li>HTML </li>
                      <li>CSS </li>
                      <li>JavaScript</li>
                      <li>C </li>
                      <li>C++</li>
                      <li>Python</li>
                      <li>Java</li>
                     
                      </ul>   

              </div>

                 <div className="container_development">
                  <h3>Data Science</h3>
                     <ul>
                      <li>NumPy, Pandas</li>
                      <li> Seaborn, Matpotlib</li>
                      <li>Scikitlearn</li>
                      

                     </ul>
                 </div>


                 <div className="container_development">
                 

                  <h3>  Databases </h3>
                  <ul>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                  </ul>
                 </div>
                 <div className="container_development">
                <h3> Web Application Tools</h3>
                  <ul>
                    <li>React.Js</li>
                    <li>Express.Js</li>
                  
                  </ul>
                 </div>
                 <div className="container_development">
                <h3>  Core Subjects</h3>
                  <ul>
                    <li>Operating Systems</li>
                    <li>DBMS</li>
                    <li>Object Oriented Programming</li>
                   
                  </ul>

              
                 </div>


                 <div className="container_development">
                <h3>  Softskills </h3>
                  <ul>
                    <li>Storytelling</li>
                    <li>Social Media Writing</li>
                    <li>Blogging</li>
                  </ul>
                 </div>
                 
            </div>

    </section >
  )
}

export default Skills