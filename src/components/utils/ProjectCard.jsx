import React, { useRef } from 'react';
import isVisibleInViewPort from './isVisibleInViewPort';

import { DiDjango, DiPython, DiHtml5, DiJavascript, DiMongodb } from 'react-icons/di';
import { FaGithub, FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiSocketdotio, SiExpress, SiPostman, SiNumpy, SiPandas } from 'react-icons/si';

export default function ProjectCard({ projectlogo, projecttitle, projectdescription, liveurl, githuburl }) {
  const projectCardRef = useRef();
  const isProjectCardVisibleInPort = isVisibleInViewPort(projectCardRef);

  return (
    <div
      ref={projectCardRef}
      className={`capitalize rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col border-slate-400 
      hover:bg-gradient-to-r from-gray-800 via-slate-700 to-slate-800 transition-opacity ease-in duration-1000 
      ${isProjectCardVisibleInPort ? 'opacity-100' : 'opacity-0'} gap-y-4 border-[1px] border-gray-200 border-opacity-70`}
    >
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
        <div className='rounded-full object-cover flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24'>
          <img src={projectlogo} alt='Project Logo' className='w-full h-full object-contain' />
        </div>

        <div className='flex flex-col gap-2'>
          <div className='font-semibold bg-gradient-to-tl from-[#b9e7f0] via-[#5db1c4] to-[#089bbc] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl'>
            {projecttitle}
          </div>
          <div className='text-gray-300 text-sm sm:text-base'>technologies and frameworks</div>

          <div className='flex flex-wrap gap-2 text-xl sm:text-2xl'>
            {projecttitle === 'Kanoon Sarathi' && (
              <>
                <DiHtml5 className='hover:text-teal-500' />
                <FaBootstrap className='hover:text-teal-500' />
                <DiJavascript className='hover:text-teal-500' />
                <DiDjango className='hover:text-teal-500' />
                <DiPython className='hover:text-teal-500' />
              </>
            )}
            {projecttitle === 'QuickChat' && (
              <>
                <DiHtml5 className='hover:text-teal-500' />
                <RiTailwindCssFill className='hover:text-teal-500' />
                <DiMongodb className='hover:text-teal-500' />
                <FaNodeJs className='hover:text-teal-500' />
                <FaReact className='hover:text-teal-500' />
                <SiExpress className='hover:text-teal-500' />
                <SiSocketdotio className='hover:text-teal-500' />
                <SiPostman className='hover:text-teal-500' />
              </>
            )}
            {projecttitle === 'Student Placement Enhancement' && (
              <>
                <SiNumpy className='hover:text-teal-500' />
                <SiPandas className='hover:text-teal-500' />
                <DiPython className='hover:text-teal-500' />
              </>
            )}
            {['Password Generator App', 'Weather App', 'Tic Tac Toe Game'].includes(projecttitle) && (
              <>
                <DiHtml5 className='hover:text-teal-500' />
                <RiTailwindCssFill className='hover:text-teal-500' />
                <FaNodeJs className='hover:text-teal-500' />
              </>
            )}
          </div>
        </div>
      </div>

      <p className='font-normal text-gray-400 text-sm sm:text-base mt-2'>{projectdescription}</p>

      <div className='flex gap-3 text-xl sm:text-2xl mt-4'>
        <a className='hover:text-teal-500' href={liveurl}><FaLink /></a>
        <a className='hover:text-teal-500' href={githuburl}><FaGithub /></a>
      </div>
    </div>
  );
}
