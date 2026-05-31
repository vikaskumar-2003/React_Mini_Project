import { useState } from 'react'
import { FaImage } from "react-icons/fa6";
import './App.css'

function App() {


  return (
   
      <div className='h-screen bg-gray-200 flex justify-center items-center'>
        <div className="bg-white rounded-xl p-4 grid grid-cols-4 gap-x-12 gap-y-6 shadow-lg ">
          <button className='border border-gray-300 w-24 h-24 flex items-center justify-center'>
            <FaImage/>
          </button>
        </div>
     </div>
   
  )
} 

export default App
