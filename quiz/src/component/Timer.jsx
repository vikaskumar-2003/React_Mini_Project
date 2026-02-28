import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [leftTime, setLeftTime] = useState(5)

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
    },[leftTime])
    
  return (
    <div>
      Timer Left:{leftTime}
    </div>
  )
}

export default Timer
