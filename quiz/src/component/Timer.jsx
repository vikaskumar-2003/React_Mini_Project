import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [leftTime, setLeftTime] = useState(5)
    let [displayTime,setDisplayTime]=useState("") 

    useEffect(() => {
     
      let intervalId=  setInterval(() => {
          setLeftTime(prev => { 
              if (prev <= 0) {
                  clearInterval(intervalId)
                  return 0
              }
              return prev-1
          })
      }, 1000) 
        
        
        
        return () => {
            clearInterval(intervalId )
        }
    }, [])
    
    useEffect(() => {
         let formateTime= (`${(Math.floor(leftTime/60)).toString().padStart(2,0)}:${(leftTime%60).toString().padStart(2,0)}`);
           setDisplayTime(formateTime)
    },[leftTime])
    
  return (
    <div>
      Timer Left:{displayTime}
      {displayTime==0?<h1>hello</h1>:<p>bye</p>}
    </div>
  )
}

export default Timer
