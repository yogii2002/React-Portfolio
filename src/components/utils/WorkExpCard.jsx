import React from 'react'
import { FaLink } from 'react-icons/fa';

import isVisibleInViewPort from './isVisibleInViewPort';
import { useRef } from 'react';


export default function WorkExpCard({companyLogo,companyName,workTitle,workDuration,workDesc,techStack,workUrl}) {
  
  const workExpCardRef = useRef();
  const isWorkExpCardVisibleInPort = isVisibleInViewPort(workExpCardRef);
  return (
    <div ref={workExpCardRef}  className={`  capitalize rounded-2xl pt-[2rem] pb-[2rem] pr-[2rem] pl-[2rem] flex flex-col border-slate-400 hover:bg-gradient-to-r from-gray-800 via-slate-700 to-slate-800  transition-opacity ease-in duration-1000 ${isWorkExpCardVisibleInPort ? "opacity-100" : "opacity-0"} gap-y-3 border-[1px] border-gray-200 border-opacity-70 `}  >


      <div className='flex flex-col gap-2 '>
        <div className='flex gap-2 justify-evenly items-center'>
          <img src={companyLogo} className=' rounded-[100%]  object-cover  flex items-center justify-center w-[5rem] h-[5rem] max-w-content'/>
          <div className='flex flex-col gap-2'>
            <p className='font-semibold  bg-gradient-to-tl from-[#b9e7f0] via-[#5db1c4] to-[#089bbc]  bg-transparent bg-clip-text text-transparent text-[2rem]'>{companyName}</p>
            <p className='text-[1rem] text-gray-400'>{workTitle}</p>
            <p className='text-gray-300 text-sm'>{workDuration}</p>
          </div>
        </div>
        <ul className='flex flex-col gap-1 text-blue-300 m-2 p-2'>
          {
            workDesc.map((desc,index)=>(
              <li key={index}>
                {desc}
              </li>
            ))
          }
        </ul>
        <div  className=' flex text-[2rem] gap-2 m-2 p-2'>
          {
            techStack.map((tech,index)=>(
              <p className='hover:text-teal-500 w-[90%] sm:w-[95%] md:w-[80%] lg:w-[70%]' key={index}>{tech()}</p>
            ))
          }
        </div>
        <p><a className='hover:text-teal-500 text-[2rem]' href={workUrl}><FaLink/></a></p>
      </div>
    </div>
  )
}

