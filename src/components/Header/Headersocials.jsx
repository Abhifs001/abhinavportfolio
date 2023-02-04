import React from 'react'
import { GrLinkedin } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import { GrFacebook} from 'react-icons/gr'
import { GrTwitter} from 'react-icons/gr'
import { GrGithub} from 'react-icons/gr'
const Headersocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/abhinav-pandey-001/" target="_blank" rel="noreferrer"><GrLinkedin/> </a>

        <a href="https://www.instagram.com/abhi_pandey9691/" target="_blank" rel= "noreferrer"> 
        <GrInstagram/></a>
        <a href="https://www.instagram.com/abhi_pandey9691/" target="_blank" rel= "noreferrer"> 
        <GrFacebook/></a>
        <a href="https://www.instagram.com/abhi_pandey9691/" target="_blank" rel= "noreferrer"> 
        <GrTwitter/></a>
        <a href="https://github.com/Abhifs001" target="_blank" rel= "noreferrer"> 
        <GrGithub/></a>
    
    </div>
  )
}

export default Headersocials