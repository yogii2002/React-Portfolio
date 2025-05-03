import { motion } from "framer-motion";
import React from 'react';
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useState , useEffect } from "react";
import isVisibleInViewPort from "../utils/isVisibleInViewPort"
import { useRef } from "react";
import { div } from "framer-motion/client";
export default function Skills() {
  const ref1=useRef();
  const ref2=useRef();
  const ref3=useRef();
  const programmingLanguagesVisibile = isVisibleInViewPort(ref1);
  const frameworksAndLibrariesVisible = isVisibleInViewPort(ref2);
  const toolsVisible = isVisibleInViewPort(ref3);

  return (
    <div id="skills" className="">
      
      <h1 className=' text-[3rem] font-semibold'>Skills</h1>
      <div className='mt-[3rem] space-y-[3rem] '>
        <div className={`programmingLanguages flex flex-col items-center justify-center transform transition-transform duration-[3000ms] ease-out
            ${programmingLanguagesVisibile ? "translate-x-0 opacity-100" : "-translate-x-[50%] opacity-0"}` } ref={ref1}>
          <h2 className=' text-[2rem] font-bold  bg-gradient-to-tl from-[#b9e7f0] via-[#5db1c4] to-[#089bbc]  bg-transparent bg-clip-text text-transparent'>Programming Languages</h2>
            <div className='flex flex-row max-w-[80%] flex-wrap space-x-[3rem] items-center justify-center mt-[1rem] mb-[1rem] pt-[0.5rem] pb-[0.5rem]'>
                <div>
                  <button className="cursor-default text-white-500 font-semibold text-6xl hover:text-teal-500  transition-colors duration-300">C</button>
                </div>
                <div>
                  <TbBrandCpp  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>
                <div>
                  <FaJava  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>
                <div>
                  <FaPython  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>
                <div>
                  <FaHtml5  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>
                <div>
                  <FaCss3Alt  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>
                <div>
                  <TbBrandJavascript  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>
                <div>
                  <DiNodejs  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>
            </div>
        </div>
            
                    
        <div ref={ref2} className={`frameworksAndLibraries flex flex-col items-center justify-center transform transition-transform duration-[3000ms] ease-out
            ${frameworksAndLibrariesVisible ? "translate-x-0 opacity-100" : "translate-x-[50%] opacity-0"} `} >
            <h2 className=' text-[2rem] font-bold  bg-gradient-to-tl from-[#b9e7f0] via-[#5db1c4] to-[#089bbc]  bg-transparent bg-clip-text text-transparent'>Frameworks and Libraries</h2>
            <div className='flex flex-row max-w-[80%] flex-wrap space-x-[3rem] items-center justify-center mt-[1rem] mb-[1rem] pt-[0.5rem] pb-[0.5rem]'>
              <div>
                <FaReact  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
              </div>
              <div>
                <SiExpress  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
              </div>
              <div>
                <RiTailwindCssFill  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
              </div>
              <div>
                <SiNumpy  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
              </div>
              <div>
                <SiPandas  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
              </div>
              <div>
                <DiDjango className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
              </div>
            </div>
            
        </div>



        <div className={`tools flex flex-col items-center justify-center transform transition-transform duration-[3000ms] ease-out
            ${toolsVisible ? "translate-x-0 opacity-[100]" : "-translate-x-[50%] opacity-0"} `} ref={ref3}>
            <h2 className=' text-[2rem] font-bold  bg-gradient-to-tl from-[#b9e7f0] via-[#5db1c4] to-[#089bbc]  bg-transparent bg-clip-text text-transparent'>Tools</h2>
            <div className='flex flex-row max-w-[80%] flex-wrap space-x-[3rem] items-center justify-center mt-[1rem] mb-[1rem] pt-[0.5rem] pb-[0.5rem]`'>
                <div>
                  <FaGitAlt  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>
                <div>
                  <FaGithub  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>
                <div>
                  <SiMysql  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>
                <div>
                  <SiMongodb  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>
                
                <div>
                  <SiPostman  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>
                <div>
                  <VscVscode  className="text-white-500 text-6xl hover:text-teal-500  transition-colors duration-300"/>
                </div>

            </div>
              
          </div>
      </div>
  
    </div>
  )
}
