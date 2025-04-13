import React from 'react'
import { CiShare1 } from "react-icons/ci";
import projectlogo from '../../assets/react.svg'
import isVisibleInViewPort from './isVisibleInViewPort';
import { useRef } from 'react';
import HighlightText from './HighlightText';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";


// import React from 'react'

export default function ProjectCard() {
  
  const projectCardRef = useRef();
  const isProjectCardVisibleInPort = isVisibleInViewPort(projectCardRef);
  return (
    <div ref={projectCardRef}  className={`capitalize rounded-2xl pt-[2rem] pb-[2rem] pr-[2rem] pl-[2rem] flex flex-col border-slate-400 hover:bg-gradient-to-r from-gray-800 via-slate-700 to-slate-800  transition-opacity ease-in duration-1000 ${isProjectCardVisibleInPort ? "opacity-100" : "opacity-0"} gap-y-3 border-[1px] border-gray-200 border-opacity-70`} >
        <div className='flex gap-3 '>
          <div className='border-[3px] border-white rounded-[100%] object-cover w-[5rem] h-[5rem] flex items-center justify-center'>
          <img src={projectlogo} alt="Project Logo"  />
          </div>
          
          <div className='flex flex-col gap-2 '>
            
            <div className='font-semibold  bg-gradient-to-tl from-[#b9e7f0] via-[#5db1c4] to-[#089bbc]  bg-transparent bg-clip-text text-transparent text-[2rem]'>Project title</div>
            
            <div className='text-gray-300 '>
              tack stack
            </div>
            <div className='flex gap-2 text-[2rem]'>
              <div className='hover:text-teal-500 '><FaGithub/></div>
              <div className='hover:text-teal-500 '><FaLink/></div>
              <div className='hover:text-teal-500 '><FaGithub/></div>
              <div className='hover:text-teal-500 '><FaLink/></div>
              <div className='hover:text-teal-500 '><FaGithub/></div>
              <div className='hover:text-teal-500 '><FaLink/></div>
            </div>
          </div>
        </div>

        <p className='font-normal text-gray-400'>project description Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic, quo facere neque consectetur commodi rerum id eum. Necessitatibus ad pariatur libero obcaecati aperiam amet harum dolorum placeat eum quisquam.
        </p>
        <div className='flex gap-2 text-[2rem] mt-2  '>
          <div className='hover:text-teal-500 '><FaGithub/></div>
          <div className='hover:text-teal-500 '><FaLink/></div>
        </div>


    </div>
  )
}

