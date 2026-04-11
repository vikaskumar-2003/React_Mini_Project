import { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'
import 'animate.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const apiKey='H70f2V9cg7jGU0ddDNQZmF9VVvmGF7kuW14LzvPFjJPeaeFjDFlkvWgA'
function App() {
  const [photos, setPhotos] = useState([])
  const[loading,setLoading]=useState(false)
  const[page,setPage]=useState(1)
const[query,setQuery]=useState("animal")
  async function fetchImage() {
    try {
      setLoading(true)
      const options = {
        headers: {
          Authorization:apiKey
        }
      }
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=12`,options)
      console.log(res.data);
      setPhotos([...photos,...res.data.photos])
      
     }
    catch (err) {
         toast.error('failed to fetch images')
    }
    finally {
      setLoading(false)
    }
   }

  useEffect(() => {
    fetchImage()
  }, [page,query])
  
  const loadMore = () => {
    setPage((prev)=>prev+1)
  }

  const search = (e) => {
    e.preventDefault()
    const q = e.target[0].value.trim()
    setPhotos([])
    setQuery(q)
  }

  return (
    
      <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8 gap-12 animate__animated animate__fadeIn ">
         <h1 className='text-4xl font-bold text-indigo-600'>Image Gallery</h1>
        <form className='' onSubmit={search} >
        <input type="text"  className='focus:outline-indigo-500 p-3 bg-white rounded-l-lg w-[400px]' />
        <button className=' bg-gradient-to-br from-indigo-600 via-blue-500 to-indigo-600 text-white px-8 py-3 rounded-r-lg  '>Search</button>
         </form>

      <div className="grid grid-cols-4 gap-12 w-9/12">
          {photos.map((item,index) => (
            <div key={index} className='bg-white rounded-xl hover:scale-110 transition transition-transform duration-300 '>
              <img className='rounded-t-lg h-[180px] object-cover w-full  ' src={item.src.medium} alt={item.alt} />
              <div className="p-3">
                <h1  >{item.photographer}</h1>
                <button className='mt-3 w-full block bg-green-400 font-bold gap-2 py-2 rounded-lg text-center hover:scale-105 transition-transform duration-300 ' href="">
                  <i className="ri-download-2-line p-1l "></i>
                  DOWNLOAD
                </button>
               </div>
            </div>
           
          ))}
      </div>
      {
        loading && 
        <i className="ri-refresh-line text-grey-400 animate-spin"></i>
      }
      <button onClick={loadMore} className='bg-rose-500 py-3 px-16 rounded-lg font-medium text-white hover:scale-105 transition-transform duration-300 '>LOAD MORE</button>
      <ToastContainer/>
     </div>
    
  )
}

export default App
