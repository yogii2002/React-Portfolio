import React from 'react';
import Lottie from 'lottie-react'
import { useRef } from 'react'
import nitkkrlogo from '../../assets/education_assets/nitlogo.png';
import davvindorelogo from "../../assets/education_assets/davvlogo.jpeg"
import educationPageSvg from '../../assets/svgs/educationPageSvg.json'
import isVisibleInViewPort from '../utils/isVisibleInViewPort';
import HighlightText from '../utils/HighlightText';
export default function Education() {
  const educationRef=useRef();
  const isEduVisibleInPort=isVisibleInViewPort(educationRef);
  return (
    <div id='education' className='mt-[10rem] w-[100%] mx-auto'>
      <h2 className=' text-[3rem] font-semibold mb-[5rem]'>Education</h2>
     
      <div  className={`flex flex-row items-center justify-center gap-[2rem] transform transition-transform duration-[3000ms] ease-out
      ${isEduVisibleInPort ? "translate-x-0 opacity-100" : "-translate-x-[50%] opacity-0"}  ` } ref={educationRef}>


        <div className='w-[30rem]'>
            <Lottie animationData={educationPageSvg}/>
        </div>

        
        {/* rightsection */}
        <div className=' flex flex-col gap-y-[4rem] '>

          <div className='flex gap-x-[1rem] rounded-2xl items-center hover:bg-gradient-to-tl from-gray-800 to-slate-700  p-4 '>
              <img src={nitkkrlogo} alt=""  className='rounded-full w-[5rem] h-[5rem]'/>
              <div>
                <h2 className='text-[2rem] font-bold  bg-gradient-to-tl from-[#b9e7f0] via-[#5db1c4] to-[#0fbed1]  bg-transparent bg-clip-text text-transparent'>National Institute of Technology , Kurukshetra</h2>
                <p className='text-[1.5rem] font-semibold'>Master of Computer Application</p>
                <span className='opacity-[75%] font-semibold '>July 2023 - June 2026</span>
              </div>
          </div>

          <div className='flex gap-x-[1rem] items-center rounded-2xl  hover:bg-gradient-to-tl from-gray-800 to-slate-700  p-4 '>
              <img src={davvindorelogo} alt=""  className='rounded-full w-[5rem] h-[5rem]'/>
              <div>
                <h2 className='text-[2rem] font-bold  bg-gradient-to-tl from-[#b9e7f0] via-[#5db1c4] to-[#089bbc]  bg-transparent bg-clip-text text-transparent'>Devi Ahilya Vishwavidhyalay , Indore</h2>
                
                <p className='text-[1.5rem] font-semibold'>Bachelor of Computer Application</p>
                <span className='opacity-[75%] font-semibold '>July 2023 - June 2023</span>
              </div>
          </div>


        </div>


      </div>
      
      
    </div>
  )
}
