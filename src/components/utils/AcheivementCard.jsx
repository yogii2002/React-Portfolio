import React, { useRef } from 'react';
import isVisibleInViewPort from './isVisibleInViewPort';
import { FaLink } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
export default function AcheivementCard({ title, profilelink , description ,icon}) {
  const ref = useRef();
  const visible = isVisibleInViewPort(ref);

  return (
    <div
      ref={ref}
      className={`
        capitalize rounded-2xl
        p-4 sm:p-6 md:p-8 lg:p-10
        flex flex-col gap-y-3
        border border-gray-200 border-opacity-70
        hover:bg-gradient-to-r from-gray-800 via-slate-700 to-slate-800
        transition-opacity ease-in duration-1000
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
    > 
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <div
          className="
            font-semibold  text-[1rem] flex-col m-1 p-1 
          "
        >
          <div className={`${title==="Leetcode"?"text-yellow-600":"text-green-600"} flex gap-4 items-center`}>
            <p className='text-[1.5rem]'>
              {
                title==="Leetcode"?(<SiLeetcode/>):(<SiGeeksforgeeks/>)
              }
            </p>
            <p className='text-[2rem]'>{title}</p>
          </div>
          <p className='text-gray-300 m-1'>{description}</p>
          <div >
              <a
                href={profilelink}
                className="
                  mt-1 sm:mt-0
                  text-lg sm:text-xl md:text-2xl lg:text-3xl
                  hover:text-teal-500 transition-colors duration-300 
                "
              >
                <FaLink />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}
