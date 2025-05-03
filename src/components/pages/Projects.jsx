import React from 'react';
import ProjectCard from '../utils/ProjectCard';
import KanoonSarathi from '../../assets/project_logo/KanoonSarathi.png';
import QuickChat from '../../assets/project_logo/QuickChat.svg';
import DataAnalytics from '../../assets/project_logo/DataAnalytics.svg';
import Weather from '../../assets/project_logo/Weather.svg';
import Password from '../../assets/project_logo/Password.svg';
import TicTacToe from '../../assets/project_logo/TicTacToe.svg';

export default function Projects() {
  return (
    <div id="projects" className="mt-32 mb-8">
      <h1 className=' text-[3rem] font-semibold'>Projects</h1>
      
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
        <ProjectCard 
          projectlogo={KanoonSarathi}
          projecttitle="Kanoon Sarathi"
          projectdescription="Kanoon Sarathi empowers lawyers, judges, and law students to quickly access relevant case laws and legal precedents, reducing time spent on manual research."
          liveurl="https://web-production-3add.up.railway.app/"
          githuburl="https://github.com/yogii2002/Kanoon-Sarthi"
        />

        <ProjectCard 
          projectlogo={QuickChat}
          projecttitle="QuickChat"
          projectdescription="Real Time Chat App with Awesome UI"
          liveurl="https://chat-application-2p1o.onrender.com/login"
          githuburl="https://github.com/yogii2002/Chat-Application"
        />

        <ProjectCard 
          projectlogo={DataAnalytics}
          projecttitle="Student Placement Enhancement"
          projectdescription="Data analysis of student placements based on CGPA, skills, internships, and projects to draw insights for improving placement outcomes."
          liveurl="https://github.com/yogii2002/data-analytics-kapil_sir"
          githuburl="https://github.com/yogii2002/data-analytics-kapil_sir"
        />

        <ProjectCard 
          projectlogo={Password}
          projecttitle="Password Generator App"
          projectdescription="Generate your password randomly with Password Generator app for various difficulty levels."
          liveurl="https://yogii2002.github.io/PASSWORD-GENERATOR/"
          githuburl="https://github.com/yogii2002/PASSWORD-GENERATOR"
        />

        <ProjectCard 
          projectlogo={Weather}
          projecttitle="Weather App"
          projectdescription="Check weather in your city in real time."
          liveurl="https://yogii2002.github.io/WEATHER-APP/"
          githuburl="https://github.com/yogii2002/WEATHER-APP"
        />

        <ProjectCard 
          projectlogo={TicTacToe}
          projecttitle="Tic Tac Toe Game"
          projectdescription="Two-player Tic Tac Toe with a clean UI."
          liveurl="https://yogii2002.github.io/TIC-TAC-TOE/"
          githuburl="https://github.com/yogii2002/TIC-TAC-TOE"
        />
      </div>
    </div>
  );
}
