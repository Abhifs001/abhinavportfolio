import React from 'react'
import './Header.css'
import CTA from './CTA'
import Headersocials from './Headersocials'
import ME from '../../assets/1675436430107.jpg'
const Header = () => {
  return (
   <header>
      <div className="container header_container">
        <h4 >Hi there, I'm</h4>
        <h1>Abhinav Pandey</h1>
        <h3 className="text-light">Software Developer  & Data Science Practioner  </h3>
        <CTA/>

      <Headersocials/>
        <div>
        <ul  className="about_header-content">  
           
           <li>
           Computer Science Undergraduate Possessing excellent communication, and problem-solving skills. Adaptive at  and collaborative with stakeholders at all levels. Seeking a responsible position for Scalable Product Building using efficient Software Engineering Principles.
           </li>
           <li> Strong problem-solving skills and attention to detail, with a passion for continuously learning and staying up-to-date with industry developments.  </li>
          
          </ul>
        </div>
        
        <div className="me">
            <img src={ME} alt="" className='me_image'   />
        </div>
        
      </div>
   </header>
  )
}

export default Header