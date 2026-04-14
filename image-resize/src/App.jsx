import { useState } from "react";

import "./App.css";

function App() {
  const [original, setOriginal] = useState('/sample.png');
  const [form, setForm] = useState({
    width: "",
    height:"",
  })
  const [resizeImage,setResizeImage]=useState('./sample.png') 

  const handleChange = (e) => {
    const input = e.target
    const name = input.name
    const value = input.value
    console.log(name, value);
    setForm({
      ...form,
      [name]:Number(value),
    })
    
  }

  const showImage = (e) => {
    const input = e.target 
    const file = input.files[0]
    const url = URL.createObjectURL(file)
    setOriginal(url)
  }

  const reSize = (e) => {
    
    
    e.preventDefault()
    const image = new Image()
    image.src=original
    image.onload = () => {
      const canvas = document.createElement("canvas")
    const targetWidth = Number(form.width)
    const targetHeight=Number(form.height)
    canvas.width = targetWidth
    canvas.height = targetHeight
    const ctx = canvas.getContext("2d")
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality="high"
    ctx.drawImage(image, 0, 0, targetHeight, targetWidth)
    let imageString = canvas.toDataURL("image/webp",0.92)
    console.log(imageString);
      
      setResizeImage(imageString)
    }
    

   
    
  }

  return (
    <div className="bg-gray-200 min-h-screen py-12">
      <div className="mx-auto w-10/12 bg-white rounded-xl p-8 grid grid-cols-2 gap-6">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Image Resizer</h1>
          <div className="relative h-[500px] bg-slate-900 rounded-lg p-4">
            <img className="rounded-lg object-contain w-full h-full " src={original} alt="" />
            <input onChange={showImage} accept="image/*" type="file" className="absolute top-0 left-0 opacity-0 w-full h-full rounded-lg" />
          </div>
          
          <div>
            <form className="flex gap-2 justify-center " onSubmit={reSize}>
              <input
                name="width"
                type="number"
                placeholder="width"
                className="border border-gray-300 p-2 rounded"
                required
                onChange={handleChange}
                disabled={original==='/sample.png'}
              />
              <input
                name="height"
                type="number"
                onChange={handleChange}
                placeholder="height"
                className="border border-gray-300 p-2 rounded"
                required
                disabled={original==='/sample.png'}
              />
              <button className="bg-indigo-600 text-white font-medium py-2 px-8 rounded hover:bg-green-500 duration-300  hover:scale-105 transition-transform">Resize</button>
              
            </form>
          </div>
          
        </div>
        <div className="space-y-6">
           <h1 className="text-2xl font-bold">Result</h1>
          <div className="flex items-center justify-center overflow-auto h-[500px] bg-slate-900 rounded-lg p-4">
            <img className="rounded-lg object-contain w-full h-full " src={resizeImage} alt=""
              style={{
                width: form.width,
                height:form.height
              }}
            />
           
          </div>
          
          </div>
      </div>
    </div>
  );
}

export default App;
