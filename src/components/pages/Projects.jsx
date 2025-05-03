
import React from 'react'
import ProjectCard from '../utils/ProjectCard'
import KanoonSarathi from '../../assets/project_logo/KanoonSarathi.png';
import QuickChat from '../../assets/project_logo/QuickChat.svg';
import DataAnalytics from '../../assets/project_logo/DataAnalytics.svg';
import Weather from '../../assets/project_logo/Weather.svg';
import Password from '../../assets/project_logo/Password.svg';
import TicTacToe from '../../assets/project_logo/TicTacToe.svg';
export default function Projects() {
  return (
    <div id='projects' className='mt-[8rem] mb-[2rem] '>
      <div className='text-[3rem] font-semibold'><h2>Projects</h2></div>
      <div className='grid grid-cols-2 mx-auto w-[80%] gap-[3rem] mt-[8rem] mb-[2rem] '>
        <ProjectCard 
        projectlogo={KanoonSarathi}
        projecttitle={"Kanoon Sarathi"}
        projectdescription={"Kanoon Sarathi empowers lawyers, judges, and law students to quickly access relevant case laws and legal precedents reducing time spent on manual research."}
        liveurl={"https://web-production-3add.up.railway.app/"}
        githuburl={"https://github.com/yogii2002/Kanoon-Sarthi"} />
        
        <ProjectCard 
        projectlogo={QuickChat}
        projecttitle={"QuickChat"}
        projectdescription={"Real Time Chat App with Awesome UI"}
        liveurl={"https://chat-application-2p1o.onrender.com/login"}
        githuburl={"https://github.com/yogii2002/Chat-Application"} />



        <ProjectCard 
        projectlogo={DataAnalytics}
        projecttitle={"Student Placement Enhancement"}
        projectdescription={"Data analysis of student placements based on CGPA, skills, internships, and projects to draw insights for improving placement outcomes."}
        liveurl={"https://github.com/yogii2002/data-analytics-kapil_sir"}
        githuburl={"https://github.com/yogii2002/data-analytics-kapil_sir"} />
        
        <ProjectCard 
        projectlogo={Password}
        projecttitle={"Password Generator App"}
        projectdescription={"Generate your password randomly with Password Generator app for various difficulty level."}
        liveurl={"https://yogii2002.github.io/PASSWORD-GENERATOR/"}
        githuburl={"https://github.com/yogii2002/PASSWORD-GENERATOR"} />

        <ProjectCard 
        projectlogo={Weather}
        projecttitle={"Weather App"}
        projectdescription={"Check Weather in your City on real time basis."}
        liveurl={"https://yogii2002.github.io/WEATHER-APP/"}
        githuburl={"https://github.com/yogii2002/WEATHER-APP"} />

        <ProjectCard 
        projectlogo={TicTacToe}
        projecttitle={"Tic Tac Toe Game"}
        projectdescription={"Two player tic tac toe with clean UI."}
        liveurl={"https://yogii2002.github.io/TIC-TAC-TOE/"}
        githuburl={"https://github.com/yogii2002/TIC-TAC-TOE"} />

      </div>
    </div>
  )
}
