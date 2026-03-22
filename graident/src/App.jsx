
import { useState } from 'react'
import './App.css'
import BOX from './BOX'

function App() {

  const [num,setNum]=useState(12)
  const [type,setType]=useState("linear")
  const[graident,setGradients]=[]
//convert hex to rgb
  const getHexColorCode = () => {
     const rgb=255*255*255
    const random = Math.floor(Math.random() * rgb);
    console.log(random);
    const init = random.toString(16)
   const colorHex= init.padStart(6,'0')
    console.log(colorHex);
    return`#${colorHex}`

   }

  return (
    <>
      <div className='min-h-screen bg-white py-10'>
        <div className='w-9/12 mx-auto space-y-8'>
          <div className='flex justify-between'>
            <h1 className='text-3xl text-bold'>
              Gradient Generator -{num} {type}
            </h1>
            
            <div className='flex gap-4'>
              <input
                className='border border-slate-300 bg-white rounded-lg w-[100px] p-2'
                onChange={(e) => setNum(Number(e.target.value))}
                value={num}
                type="text" />
              <select value={type} className='border border-slate-300 bg-white rounded-lg w-[100px] p-2' onChange={(e)=>setType(e.target.value)} >
                <option value="linear">Linear</option>
                <option value="radial">Radial</option>
              </select>
            </div>
            <button onClick={getHexColorCode}> test</button>
          </div>
            
          
           <BOX getHexColorCode={getHexColorCode}/>
        </div>
     </div>
    </>
  )
}

export default App
