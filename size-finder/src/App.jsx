import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { FaPlus } from "react-icons/fa";
import './App.css'
import { FaArrowCircleRight } from "react-icons/fa";


function App() {
  const [src, setSrc] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/330px-Placeholder_view_vector.svg.png')
  const [original, setOriginal] = useState({
    width: 0,
    height:0
  })

  const [suggested,setSuggested]=useState(0)
  const[suggestedWidth,setSuggestedWidth]=useState(0)

  const findHeight = (e) => {
    e.preventDefault()
    const width = e.target[0].value
    const height = (width * original.height) / original.width
    setSuggested(height)
  }

  const findWidth = (e) => {
    e.preventDefault()
     const height = e.target[0].value
    const width = (height * original.width) / original.height
    setSuggestedWidth(width)
  }

  const chooseImage = () => {
    const input = document.createElement("input")
    input.type = 'file'
    input.accept = 'image/*'
    input.click()
    input.onchange = () => {
      const file = input.files[0]
      const url = URL.createObjectURL(file)
      setSrc(url)
      const image = new Image()
      image.src=url
      image.onload = () => {
        console.log(image.width, image.height);
        setOriginal({
          width: image.width,
          height:image.height
        })
        
      }
    }
  }

  return (
    <>
      <div className="bg-gray-300 min-h-screen">
        <div className="w-9/12 mx-auto py-16 flex-col gap-8">
          <button onClick={chooseImage} className='w-fit bg-indigo-600 text-white font-medium px-16 py-3 rounded-lg flex items-center gap-1 hover:scale-105 transition-transform duration-300 mb-3'>
            <FaPlus className='w-4 h-4  ' />
            Add image
          </button>
          <div className="bg-white rounded-xl p-8 flex justify-center align-center">
            <img src={src} alt="" className='w-[40%]' />

          </div>

          <div className="bg-white rounded-xl p-8 grid grid-cols-2 gap-12 mt-5 ">
                 
            <div >
              <h1 className='bg-rose-500 py-3 px-4 font-bold text-lg text-white w-fit mb-3'>Height finder</h1>
              <form onSubmit={findHeight}>
                
                <input
                  className='border border-gray-300 p-3 rounded '
                  name='width'
                  placeholder='enter height'
                  type='number'
                />
                <button className='bg-indigo-600 text-white flex items-center gap-1 p-2 rounded-xl mt-3 mb-3 '>
                  <FaArrowCircleRight />

                  Find
                 </button>
         
              </form>
              <h1 className='mt-4 text-xl font-bold'>Height Suggestion:{suggested }</h1>
            </div>
            <div >
              <h1 className='bg-green-500 py-3 px-4 font-bold text-lg text-white w-fit mb-3'>Width Finder</h1>
              <form onSubmit={findWidth}>
                
                <input
                  className='border border-gray-300 p-3 rounded '
                  name='width'
                  type='number'
                  placeholder='enter width'
                />
                <button className='bg-indigo-600 text-white flex items-center gap-1 p-2 rounded-xl mt-3 '>
                  <FaArrowCircleRight />

                  Find
                 </button>
         
              </form>
              <h1 className='mt-4 text-xl font-bold'>Width Suggestion:{suggestedWidth }</h1>
            </div>
            
          </div>
        </div>
       </div>

    </>
  )
}

export default App
