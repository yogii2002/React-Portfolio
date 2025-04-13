import React from 'react'
import Lottie from 'lottie-react'
import homePageSvg from '../../assets/svgs/homePageSvg.json'
import PortfolioButton from "../utils/PortfolioButton";
import HighlightText from '../utils/HighlightText';
export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <div className="main-content flex w-[100%] items-center justify-center mx-auto ">
        {/* Left Side: Text and CV Download */}
        <div className="text-section w-[50%] ">
            <div className="title text-[4rem] font-semibold ">Hi there! <br /> I am <br /><HighlightText text={'Yogesh Jat'}/></div>
            <div className="description text-wrap w-[35rem] mt-[1rem] mb-[1rem] font-semibold text-gray-300">
            Software Developer from India persuing MCA from NIT KKR who is either busy improving his craft or pondering over the next big idea.
            </div>
            
                <a href="/resume.pdf"><PortfolioButton > Download CV </PortfolioButton></a>
            
        </div>

        {/* Right Side: Images */}
        <div className='w-[40%]'>
            <Lottie animationData={homePageSvg}/>
        </div>
    </div>
    </div>
  )
}
