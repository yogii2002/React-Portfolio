import React from 'react'
import { useRef } from 'react';
import isVisibleInViewPort from './isVisibleInViewPort';

import { FaLink } from "react-icons/fa6";
import { SiLeetcode,SiGeeksforgeeks } from 'react-icons/si';
import { div } from 'framer-motion/client';


const AcheivementCard = ({title,profilelink}) => {
  const acheivementCardRef = useRef();
    const isAcheivementCardVisibleInPort = isVisibleInViewPort(acheivementCardRef);
    return (
      <div ref={acheivementCardRef}  className={`capitalize rounded-2xl pt-[2rem] pb-[2rem] pr-[2rem] pl-[2rem] flex flex-col border-slate-400 hover:bg-gradient-to-r from-gray-800 via-slate-700 to-slate-800  transition-opacity ease-in duration-1000 ${isAcheivementCardVisibleInPort ? "opacity-100" : "opacity-0"} gap-y-3 border-[1px] border-gray-200 border-opacity-70`} >
          <div className='flex gap-3 '>
            
            
            
            <p className='font-semibold flex gap-2  bg-gradient-to-tl from-[#b9e7f0] via-[#58b6cb] to-[#089bbc]  bg-transparent bg-clip-text text-transparent text-[2rem] justify-center items-center'>
              
              {
                title === "Leetcode" ? 
                (
                <SiLeetcode size={30} color="#FFA116" />
                ) : 
                (
                  <SiGeeksforgeeks size={30} color="#2F8D46" />
                )
              }
              {title}

            </p>
            
            <div className='flex gap-2 text-[2rem] mt-2  '>
              <a className='hover:text-teal-500 ' href={profilelink}><FaLink/></a>
            </div>
          </div>
  
          
          
  
  
      </div>
    )
}

export default AcheivementCard
