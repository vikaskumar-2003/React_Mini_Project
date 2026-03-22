
import './App.css'
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import { useState } from 'react';
import getYouTubeID from 'get-youtube-id'
import { ToastContainer,toast } from 'react-toastify';

function App() {
  const [url, setUrl] = useState('')
  const [thumbnail, setThumbnails] = useState([])
  
  const opURL = [
    {
    width: 120,
    height: 90,
    url: 'https://img.youtube.com/vi',
    filename:'default.jpg'
    },
     {
    width: 320,
    height: 180,
    url: 'https://img.youtube.com/vi',
    filename:'mqdefault.jpg'
    },
      {
    width: 480,
    height: 360,
    url: 'https://img.youtube.com/vi',
    filename:'hqdefault.jpg'
    },
       {
    width: 640,
    height: 480,
    url: 'https://img.youtube.com/vi',
    filename:'sddefault.jpg'
    },
     {
    width: 1280,
    height: 720,
    url: 'https://img.youtube.com/vi',
    filename:'maxresdefault.jpg'
    }
  ]
  
  const handleDownload = async (url, filename) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Download started!");
  } catch (error) {
    toast.error("Download failed!");
  }
};

  
  const fetchUrl = (e) => {
    e.preventDefault()
     const videoId = getYouTubeID(url)
    console.log(videoId);
     

     if (!videoId) {
       toast.error('Invalid video url')
    } 
    
    const model = opURL.map((item) => {
      return {
        ...item,
        url:`${item.url}/${videoId}/${item.filename}`
      }
    })
    setThumbnails(model)
   }

  return (
    <>
      <div className='min-h-screen bg-gray-200 py-8'>
        <div className='text-center'>
          <h1 className=' text-4xl font-bold'>YOUTUBE THUMBNAIL DOWNLOAD</h1>
          <form className='space-x-4 mt-6' onSubmit={fetchUrl} >
            <input
              value={url}
              className='bg-white p-3 rounded-lg w-[450px]'
              type="url"
              required
              onChange={(e)=>setUrl(e.target.value) }
            />
            <button className='p-3 rounded-lg bg-indigo-600 text-white font-medium '>
              <i className="ri-search mr-1"></i>
              SEARCH</button>
          </form>
        </div>
        
        <div className=" grid grid-cols-3 mt-6 gap-12 w-10/12 mx-auto">
        
           
         
          {thumbnail.map((items,index) => (<div className="bg-white rounded-lg " key={index}>
            <img src={items.url} alt="" className='w-full h-[250px] object-cover rounded-t-xl' />
            <div className='p-3 bg-white rounded-b-xl flex justify-between' >
              <h1>{`${items.width}x ${items.height}  `}</h1>
              <button className='p-3 rounded-lg bg-green-600 text-white font-medium ' onClick={() => handleDownload(items.url,items.filename)}>
              <i className="ri-download-line mr-1"></i>
              DOWNLOAD</button>
            </div>
          </div>
          ))}
      
        </div>
        <ToastContainer/>
     </div>

    </>
  )
}

export default App
