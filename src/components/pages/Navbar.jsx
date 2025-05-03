import React, { createRef, useRef } from 'react'

export default function Navbar() {
  return (
    <div className='w-full'>
        <nav className="navbar flex flex-col md:flex-row justify-between mt-[0.5rem] mb-[3rem] w-[90%] md:w-[80%] pt-[0.75rem] pb-[0.75rem] rounded-xl items-center mx-auto">
            <div className="name w-full md:w-[30%] mb-4 md:mb-0">
                <a href="#" className="flex items-center justify-center md:justify-start">
                  <div className='flex items-center justify-center gap-2'>
                      <div className='text-[4rem] text-[#34dee5] '>&#123;</div> 
                      <div className='font-semibold flex items-center justify-center gap-1 text-[1.5rem] text-gray-300'>
                          <p>YOGESH</p>
                          <p>JAT</p>
                      </div> 
                      <div className='text-[4rem] text-[#34dee5] '> &#125;</div>
                  </div>
                </a>
            </div>
            <div className="nav-links flex flex-wrap gap-y-4 gap-x-6 md:space-x-[2rem] w-full md:w-[70%] justify-center md:justify-around font-sans font-semibold text-gray-300 text-center">
                <a href='#education'>Education</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#acheivements'>Acheivements</a>
                <a href='#contact'>Contact Me</a>
            </div>
        </nav>
    </div>
  )
}
