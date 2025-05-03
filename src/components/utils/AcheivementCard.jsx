import React, { useRef } from 'react';
import isVisibleInViewPort from './isVisibleInViewPort';
import { FaLink } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

export default function AcheivementCard({ title, profilelink }) {
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
        <p
          className="
            font-semibold flex items-center gap-2
            bg-gradient-to-tl from-[#b9e7f0] via-[#58b6cb] to-[#089bbc]
            bg-clip-text text-transparent
            text-lg sm:text-xl md:text-2xl lg:text-3xl
          "
        >
          {title === "Leetcode"
            ? <SiLeetcode size={24} />
            : <SiGeeksforgeeks size={24} />
          }
          {title}
        </p>
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
  );
}
