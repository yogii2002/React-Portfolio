import React from 'react'
import AcheivementCard from '../utils/AcheivementCard'

export default function Acheivements() {
  return (
    <div id='acheivements' className='mt-[8rem] mb-[2rem]'>
  <div className='text-[3rem] font-semibold'>
    <h2>ACHEIVEMENTS</h2>
  </div>
  <div className='grid grid-cols-1 sm:grid-cols-2 mx-auto w-[90%] md:w-[80%] gap-[3rem] mt-[8rem] mb-[2rem]'>
    <AcheivementCard title={"Leetcode"} description={"Solved 600+ Data Structures and Algorithms problems on LeetCode, demonstrating strong problem-solving and algorithmic thinking skills."}  profilelink={"https://leetcode.com/u/yogii2002/"} />
    <AcheivementCard title={"GeeksforGeeks"} description={"Practiced 300+ Data Structures and Algorithms problems on GeeksforGeeks, gaining in-depth understanding of core CS concepts and improving coding efficiency across diverse problem patterns."}  profilelink={"https://www.geeksforgeeks.org/user/yogeshjat02/"} />
  </div>
</div>

  )
}
