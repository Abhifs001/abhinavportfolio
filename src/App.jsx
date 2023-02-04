import React from 'react'
import Header from './components/Header/Header';
import Navig from './components/Navigation/navig';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Contact from './components/contact/contact';
import Projectsreal from './components/Projectsreal/Projectsreal';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
    
    
   <Navig/>
   <Header/>
   <About/>  
   <Skills/>
   <Projectsreal/>
   <Experience/> 
   <Contact/>
   <Footer/>


    </>
  );
}

export default App;