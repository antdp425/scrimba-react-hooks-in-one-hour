import React, { useState, useEffect } from 'react'
import randomColor from 'randomcolor'

export default function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(null)

  useEffect(() => {
    setColor(randomColor)
  },[count])
  // Runs on each render, unless we include dependency array
  // which will only make the function run when something in the array changes

  return (
    <div style={{ borderTop: `10px solid ${color}`}}>
      {count}
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
    </div>
  )
}