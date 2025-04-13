import './App.css'
import { useState, useEffect } from 'react';
import HomePage from './components/pages/HomePage';
import './index.css'; 
import Skills from './components/pages/Skills'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Experience from './components/pages/Experience'
// import LoadingPage from "./components/pages/LoadingPage";
import Education from './components/pages/Education';
import Acheivements from './components/pages/Acheivements';
import TextLoadingAnimation from './components/utils/textLoadingAnimation';
// import { Routes , Route } from 'react-router-dom';
function App() {
  const [animationRender,setAnimationRender]=useState(true);
  
      useEffect(()=>{
          setTimeout(()=>{
              setAnimationRender(false);
          },3000)
          return ()=>clearTimeout(timeout);
      },[])

  return (
    
      <div className='w-full h-full m-0 p-0  overflow-x-hidden'>
        
      {
            animationRender?
                <TextLoadingAnimation/>
            :
            <div className='overflow-x-hidden'>
                <HomePage/>
                <Education/>
                <Skills/>
                <Projects/>
                <Experience/>
                <Acheivements/>
                <Contact/>
            </div>

        }
        
      </div>
    
  )
}

export default App
