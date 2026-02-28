import { useState } from 'react'

import './App.css'
import Buttons from './Buttons'
import ColorBox from './ColorBox'

function App() {

  const color=['pink','blue','red']
 const [selected,setSelected]=useState('green')
  return (
    <>
      <h1>Background Changer </h1>{
        color.map((color) => (
          <Buttons color={color} key={color} setSelected={setSelected}>
          {color.toUpperCase()}
          </Buttons>
        ))
      }
      <ColorBox color={color} selected={selected} />
      
    </>
  )
}

export default App
