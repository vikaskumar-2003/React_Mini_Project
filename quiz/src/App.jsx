import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './component/Timer'
import Question from './component/Question'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Timer />
        <Question/>
        </div>
    </>
  )
}

export default App
