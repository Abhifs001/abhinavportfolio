import React from 'react'
<<<<<<< HEAD
import CV from '../../assets/Abhinav-Pandey-Resume.pdf';
=======
import CV from '../../assets/Abhinav-Pandey-Intern-Resume.pdf';
>>>>>>> 56f2ce9c4345b268d8faad7c81e537e70df0ec8c


const CTA = () => {
  return (
    <div  className='cta' >
        <a href={CV} download  className='btn '>Download Resume </a> 
        <a href="#contact"  className='btn btn-primary' >Have a Coffee Chat</a>

    </div>
  )
}

export default CTA
