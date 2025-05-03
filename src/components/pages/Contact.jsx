import React from 'react'
import myimage from '../../assets/yogeshjat.png';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import PortfolioButton from '../utils/PortfolioButton';
import { div } from 'framer-motion/client';
export default function Contact() {
  return (
    <div id='contact' className='flex flex-col items-center justify-center bg-slate-900 w-full m-4 gap-3'>
  <div className='flex flex-col sm:flex-row justify-evenly w-full'>
    {/* left */}
    <div className='flex flex-col gap-[2rem] mt-1 w-full sm:w-[60%]'>
      <p className='font-bold text-[3rem]'>Yogesh Jat</p>
      <div className='text-gray-300 text-[1rem] font-semibold'>
        <p>
          I am a software engineer currently pursuing an MCA from NIT Kurukshetra. 
          <br />
          AIR 389 in NIMCET 2023 | 99.65 percentile in MAH CET 2023 | AIR 219 in VIT MCA 2023
          <br />
          A strong passion for technology and problem-solving, I also enjoy cricket and walking in my leisure time.
        </p>
      </div>
    
      <div className='flex flex-row space-x-[1rem]'>
        <div className='flex space-x-[2rem] items-center text-[#9ce2ee]'>
          <a href='mailto:yogeshjat.work@gmail.com'><MdOutlineEmail className='w-[3rem] h-[3rem]' /></a>
        </div>
        <div className='flex space-x-[2rem] items-center text-[#9ce2ee]'>
          <a href='https://www.linkedin.com/in/yogeshjat'><CiLinkedin className='w-[3rem] h-[3rem]' /></a>
        </div>
        <div className='flex space-x-[2rem] items-center text-[#9ce2ee]'>
          <a href='https://github.com/yogii2002'><FaGithub className='w-[3rem] h-[3rem]' /></a>
        </div>
      </div>
      <a href="/resume.pdf"><PortfolioButton>Resume</PortfolioButton></a>
    </div>

    {/* right */}
    <div className='rounded-[100%] h-[20rem] w-[20rem] border-[3px] border-[#22d9f9] overflow-hidden flex justify-center items-start object-cover'>
      <img src={myimage} alt="Yogesh Jat" />
    </div>
  </div>
  <span className='font-semibold text-gray-300'>Made with 💖 by Yogesh Jat 😉</span>
</div>

  )
}
// }
// /*import React, { useState } from 'react'
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";
// import PortfolioButton from '../utils/PortfolioButton';
// import ContactForm from '../utils/ContactForm';
// export default function Contact() {
   
//   return (

//     <div id='contact' className=' w-full  h-full overflow-x-hidden '>


//         <div className='text-[5rem] font-semibold'><h2>CONTACT</h2></div>
//         <div className='mx-auto text-2xl mt-[1rem] mb-[1rem] font-semibold'>Let's create something together</div>
        
//       <div className=' flex items-center justify-center ' >

//             <div className='flex flex-row  space-x-[2rem]'>
//                 {/* left */}
//                 <div className='flex flex-col space-y-[2rem]'>
//                     <div className='flex space-x-[2rem] items-center'>
//                         <a href='mailto:yogeshjat.work@gmail.com'><MdOutlineEmail className='w-[3rem] h-[3rem]'/></a>
//                         <div className='flex space-y-2 flex-col '>
                            
//                         </div>
//                     </div>
//                     <div className='flex space-x-[2rem] items-center'>
//                         <a href='https://www.linkedin.com/in/yogeshjat'><CiLinkedin className='w-[3rem] h-[3rem]'/></a>
//                         <div className='flex space-y-2 flex-col'>
//                         </div>
//                     </div>
//                     <div className='flex space-x-[2rem] items-center'>
//                         <a href='https://github.com/yogii2002'><FaGithub className='w-[3rem] h-[3rem]'/></a>
//                         <div className='flex space-y-2 flex-col'>
//                         </div>
//                     </div>
//                 </div>
//                 {/* right */}
//                 <div>
//                     <ContactForm/>
//                 </div>



//             </div>



//             <div className="  h-[40rem] w-[40rem] left-[3rem] top-[4rem] flex justify-center items-center bg-[#010122] [background-image:radial-gradient(circle_closest-side_at_center,_hsl(330,93%,24%)_25%,_#010122)]  overflow-hidden ">
//                 {/* Unselectable Text */}
//                 {/* <pre className="absolute text-white text-4xl font-bold select-none opacity-15">
//                     <pre>
//                         <code>
//                                 System.out.println("Hello World!"); 
//                         </code>
//                     </pre>
//                 </pre> */}

//                 {/* Overlay Image */}
//                 <img
//                     src="../src/assets/yogeshjat_removedBackground.png"
//                     alt=""
//                     className="absolute h-[40rem]"
//                 />
            
//             </div>



//       </div>



//     </div>
    
//   )
// } */