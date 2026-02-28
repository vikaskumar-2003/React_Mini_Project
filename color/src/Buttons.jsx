import React from 'react'
import ColorBox from './ColorBox'

const Buttons = ({setSelected, children, color,  }) => {
    console.log(setSelected);
    
    return (
      <>
     <button style={{background:color}} className='m-2 p-2 bg-black text-white' onClick={()=>setSelected(color)}>
       {children}
     </button>
         
            </>
    )
   
}

export default Buttons
