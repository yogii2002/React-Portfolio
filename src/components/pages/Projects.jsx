import React from 'react'
import ProjectCard from '../utils/ProjectCard'
export default function Projects() {
  return (
    <div id='projects' className='mt-[8rem] mb-[2rem] '>
      <div className='text-[5rem] font-semibold'><h2>PROJECTS</h2></div>
      <div className='grid grid-cols-2 mx-auto w-[80%] gap-[3rem] mt-[8rem] mb-[2rem] '>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  )
}
