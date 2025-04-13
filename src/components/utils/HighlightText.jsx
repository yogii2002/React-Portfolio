import React from 'react'

export default function HighlightText({text,size}) {
  return (
    <span className={`font-bold  bg-gradient-to-tl from-[#b9e7f0] via-[#5db1c4] to-[#089bbc]  bg-transparent bg-clip-text text-transparent `}>
        {text}
    </span>
  )
}
