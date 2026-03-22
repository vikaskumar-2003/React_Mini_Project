import React, { useState } from 'react'
import question from './question.json'

const Question = () => {
    const [current, setCurrent] = useState(0)
    const [scor, setScore] = useState(0)
    

  return (
    <div>
          <h2 className='mt-8 mb-4'>{question[current].question}</h2>
          <div className='flex flex-col gap-3 '>
          {
              question[current].options.map((items,index) => {
                  return <button key={index} className=''>
                      {items}
                  </button>
              })
              }
              </div>
    </div>
  )
}

export default Question
