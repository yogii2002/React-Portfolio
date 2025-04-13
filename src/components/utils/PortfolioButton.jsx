import React from 'react';

export default function PortfolioButton(props) {
  return (
    <div className=''>
      <button className="bg-gradient-to-tl from-[#b8e5ef] via-[#77cee1] to-[#139ebe]   relative inline-block px-6 py-3 font-semibold text-md text-gray-800   rounded-md cursor-pointer overflow-hidden transition-all duration-600 ease-out  hover:text-gray-950 ">
        <span className="relative z-10">{props.children} </span>
        
      </button>
     
     
    </div>
  );
}
