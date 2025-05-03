import React from 'react'
import AcheivementCard from '../utils/AcheivementCard'

export default function Acheivements() {
  return (
    <div id='acheivements' className='mt-[8rem] mb-[2rem] '>
      <div className='text-[3rem] font-semibold'><h2>ACHEIVEMENTS</h2></div>
      <div className='grid grid-cols-2 mx-auto w-[80%] gap-[3rem] mt-[8rem] mb-[2rem] '>
        <AcheivementCard title={"Leetcode"} profilelink={"https://leetcode.com/u/yogii2002/"}></AcheivementCard>
        <AcheivementCard  title={"GeeksforGeeks"} profilelink={"https://www.geeksforgeeks.org/user/yogeshjat02/"}></AcheivementCard>
      </div>
    </div>
  )
}
