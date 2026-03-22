import React from 'react'

const BOX = ({getHexColorCode}) => {
  return (
    <div>
       <div className="grid grid-cols-4 gap-4">
            <div className='h-[180px]  rounded-xl relative' style={{background:getHexColorCode()}}>
              <button className='bg-black/75 rounded bottom-3 right-3 text-white absolute  pl-2 pr-2'>Copy</button>
            </div>
          </div>
    </div>
  )
}

export default BOX
