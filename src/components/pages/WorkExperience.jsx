import React from 'react';
import WorkExpCard from '../utils/WorkExpCard';

import JarnoxLogo from '../../assets/work_assets/jarnoxLogo.jpg'

import { DiPython } from 'react-icons/di';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaReact } from 'react-icons/fa6';

import { DiMysql } from 'react-icons/di';
import { SiFastapi } from 'react-icons/si';
import { SiDbeaver } from 'react-icons/si';



const JarnoxWorkDesc=[
    "Built modular and responsive UI components in React.js." , 
    "Created backend Fast API endpoints to support trading logic, user actions, and stock pattern analysis." , 
    "Wrote optimized SQL queries for querying financial data used in stock pattern recognition.",
]

export default function WorkExperience() {
  return (
    <div id="work" className="mt-32 mb-8">
      <h1 className=' text-[3rem] font-semibold'>Work Experience</h1>
      
      <div
        className="
          mt-16
          grid
          grid-cols-1       /* 1 column on very small */
          sm:grid-cols-1    /* still 1 on small */
          md:grid-cols-2    /* 2 on medium */
          lg:grid-cols-2    /* 2 on large */
          gap-8
          w-[90%] sm:w-[95%] md:w-[80%] lg:w-[70%]
          mx-auto
        "
      >
        <WorkExpCard 
          companyLogo={JarnoxLogo}
          companyName={"Jarnox"}
          workTitle={"Software Engineer Intern"}
          workDuration={"June 2025 - Present"}
          workDesc={JarnoxWorkDesc}
          techStack={[ DiPython , FaGithub,  FaLink ,FaReact, DiMysql ,SiFastapi, SiDbeaver]}
          workUrl={"https://tradingfunda.com/"}
          
        />

        
      </div>
    </div>
  );
}
