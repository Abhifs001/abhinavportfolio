import React from 'react'
import CV from '../../assets/Abhinav-Pandey-Resume.pdf';


const CTA = () => {
  return (
    <div  className='cta' >
        <a href={CV} download  className='btn '>Download Resume </a> 
        <a href="#contact"  className='btn btn-primary' >Have a Coffee Chat</a>

    </div>
  )
}

export default CTA
