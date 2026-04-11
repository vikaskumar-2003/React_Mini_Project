import { useState } from 'react'
import {QRCode,Button} from "antd"
import './App.css'


function App() {
  
  const divRef=useRef(null)

  const downloadNow = () => {
    const div = divRef.current 
    const canvas = div.querySelector("canvas")
    canvas.toDataURL("image/png")
    
  }

  return (
  
    <div className="bg-gray-100 h-screen py-12 flex flex-col items-center justify-center">
      <h1 className='text-4xl font-bold mb-12'>
        QR Code Generator
       </h1>
      <div
        ref={}
        className=" mb-12 rounded-xl p-4 bg-white shadow-lg w-fit hover:scale-115 transition-transform duration-300 hover:shadow ">
        <QRCode
          value={"https://youtu.be/FLO2p0bNh1k?si=JUVDCV5GFOzxGE2w" }
          size={300}
          icon=""
        />
        <div>
          <Button size='large' type='primary' className='!bg-gradient-to-br !from-violet-600 !via-blue-500 !to-indigo-600'
            onClick={downloadNow}
          >
            Download Now
          </Button>
        </div>
        </div>
    </div>
  )
}

export default App
