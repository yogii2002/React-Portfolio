import React from 'react'


import isVisibleInViewPort from './isVisibleInViewPort';
import { useRef } from 'react';
import { DiDjango } from 'react-icons/di';
import { DiPython } from 'react-icons/di';
import { DiHtml5 } from 'react-icons/di';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaBootstrap } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiJavascript } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { SiSocketdotio } from 'react-icons/si';
import { FaReact } from 'react-icons/fa6';
import { FaNodeJs } from 'react-icons/fa6';
import { SiExpress } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { div } from 'framer-motion/client';
import { SiNumpy } from 'react-icons/si';
import { SiPandas } from 'react-icons/si';

export default function ProjectCard({projectlogo,projecttitle,projectdescription,liveurl,githuburl}) {
  
  const projectCardRef = useRef();
  const isProjectCardVisibleInPort = isVisibleInViewPort(projectCardRef);
  return (
    <div ref={projectCardRef}  className={`capitalize rounded-2xl pt-[2rem] pb-[2rem] pr-[2rem] pl-[2rem] flex flex-col border-slate-400 hover:bg-gradient-to-r from-gray-800 via-slate-700 to-slate-800  transition-opacity ease-in duration-1000 ${isProjectCardVisibleInPort ? "opacity-100" : "opacity-0"} gap-y-3 border-[1px] border-gray-200 border-opacity-70`} >
        <div className='flex gap-3 '>
          <div className=' rounded-[100%]  object-cover  flex items-center justify-center w-[5rem] h-[5rem] max-w-content'>
          <img src={projectlogo} alt="Project Logo"  />
          </div>
          
          <div className='flex flex-col gap-2 '>
            
            <div className='font-semibold  bg-gradient-to-tl from-[#b9e7f0] via-[#5db1c4] to-[#089bbc]  bg-transparent bg-clip-text text-transparent text-[2rem]'>{projecttitle}</div>
            
            <div className='text-gray-300 '>
              technologies and frameworks
            </div>
            <div className='flex gap-2 text-[2rem]'>
              {
                projecttitle=="Kanoon Sarathi" && (
                <div className='flex gap-2 text-[2rem]'>
                    <div className='hover:text-teal-500 '><DiHtml5/></div>
                    <div className='hover:text-teal-500 '><FaBootstrap/></div>
                    <div className='hover:text-teal-500 '><DiJavascript/></div>
                    <div className='hover:text-teal-500 '><DiDjango/></div>
                    <div className='hover:text-teal-500 '><DiPython/></div>
                </div>
                )
              }

              {
                projecttitle=="QuickChat" && (
                <div className='flex gap-2 text-[2rem]'>
                    <div className='hover:text-teal-500 '><DiHtml5/></div>
                    <div className='hover:text-teal-500 '><RiTailwindCssFill/></div>
                    <div className='hover:text-teal-500 '><DiMongodb/></div>
                    <div className='hover:text-teal-500 '><FaNodeJs/></div>
                    <div className='hover:text-teal-500 '><FaReact/></div>
                    <div className='hover:text-teal-500 '><SiExpress/></div>
                    <div className='hover:text-teal-500 '><SiSocketdotio/></div>
                    <div className='hover:text-teal-500 '><SiPostman/></div>
                </div>
                )
              }
              
              
              {
                projecttitle=="Student Placement Enhancement" && (
                <div className='flex gap-2 text-[2rem]'>
                    <div className='hover:text-teal-500 '><SiNumpy/></div>
                    <div className='hover:text-teal-500 '><SiPandas/></div>
                    <div className='hover:text-teal-500 '><DiPython/></div>
                </div>
                )
              }

              {
                projecttitle=="Password Generator App" && (
                <div className='flex gap-2 text-[2rem]'>
                    <div className='hover:text-teal-500 '><DiHtml5/></div>
                    <div className='hover:text-teal-500 '><RiTailwindCssFill/></div>
                    <div className='hover:text-teal-500 '><FaNodeJs/></div>
                </div>
                )
              }


              {
                projecttitle=="Weather App" && (
                <div className='flex gap-2 text-[2rem]'>
                    <div className='hover:text-teal-500 '><DiHtml5/></div>
                    <div className='hover:text-teal-500 '><RiTailwindCssFill/></div>
                    <div className='hover:text-teal-500 '><FaNodeJs/></div>
                </div>
                )
              }


              {
                projecttitle=="Tic Tac Toe Game" && (
                <div className='flex gap-2 text-[2rem]'>
                    <div className='hover:text-teal-500 '><DiHtml5/></div>
                    <div className='hover:text-teal-500 '><RiTailwindCssFill/></div>
                    <div className='hover:text-teal-500 '><FaNodeJs/></div>
                </div>
                )
              }              
              
            </div>
          </div>
        </div>

        <p className='font-normal text-gray-400'>{projectdescription}</p>
        <div className='flex gap-2 text-[2rem] mt-2  '>
          <a className='hover:text-teal-500 ' href={liveurl}><FaLink/></a>
          <a className='hover:text-teal-500 ' href={githuburl}><FaGithub/></a>  
        </div>


    </div>
  )
}

