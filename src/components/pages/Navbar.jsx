import React, { createRef, useRef } from 'react'
// import { BsBraces } from "react-icons/bs";
// import { faBracketsCurlyLeft, faBracketsCurlyRight } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
  return (
    <div className='w-[100%]'>
        <nav className="navbar flex justify-between mt-[0.5rem] mb-[3rem]  w-[80%] outline-none pt-[0.75rem] pb-[0.75rem] rounded-xl items-center mx-auto">
            <div className="name w-[30%]">
                <a href="#"className="flex items-center">
                {/* <FontAwesomeIcon icon={faBracketsCurlyLeft} /> My Name <FontAwesomeIcon icon={faBracketsCurlyRight} /> */}
                <div className='flex items-center justify-center gap-2'>
                    <div className='text-[4rem] text-[#34dee5] '>&#123;</div> 
                    <div className=' font-semibold  flex  items-center justify-center gap-1 text-[1.5rem] text-gray-300'>
                        <p>YOGESH</p>
                        <p>JAT</p>
                    </div> 
                    <div className='text-[4rem] text-[#34dee5] '> &#125;</div>
                </div>
                </a>
            </div>
            <div className="nav-links space-x-[2rem] flex w-[70%] justify-around font-sans font-semibold text-gray-300">
                <a href='#education'>Education</a>
                <a href='#skills' >Skills</a>
                <a  href='#projects'>Projects</a>
                {/* <a href='#experience'>Experience</a> */}
                <a  href='#acheivements'>Acheivements</a>
                <a href='#contact' >Contact Me</a>
            </div>
            
        </nav>
    </div>
  )
}
