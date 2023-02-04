import React from 'react'
import './navig.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'
import {GiSoapExperiment} from 'react-icons/gi'
import {GiSkills} from 'react-icons/gi'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import { useState } from 'react'

const Navig = () => {
  const [activeNav, setActiveNav] = useState('#')
    return (
   <nav   id='nav'>
    <a href="#"  onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active': ''}  > < AiOutlineHome/> &nbsp; Home </a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#'? 'about': '' }  > <BsPersonCircle/> &nbsp;About </a>
    <a href="#skills" > <GiSkills/>&nbsp;Skills </a>
    <a href="#projects" > <AiOutlineFundProjectionScreen/>&nbsp;Projects</a>
    <a href="#experience" > <GiSoapExperiment/>&nbsp;Experience</a>
    <a href="#contact" > <AiOutlineMessage/>&nbsp;Contact</a>
   </nav>
  )
}
export default Navig;