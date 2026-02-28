import React from 'react'

const ColorBox = ({ selected }) => {
    console.log(selected);
    
  return (
      <div style={{ backgroundColor: selected }} className={`w-[300px] h-[300px]  rounded-2xl `}>
      color box
    </div>
  )
}

export default ColorBox
