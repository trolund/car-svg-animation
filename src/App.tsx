import { useState } from 'react'
import './App.css'
import Car from './components/car'
import { Switch } from './components'

function App() {
  const [moveWheels, setMoveWheels] = useState(true)
  const [moveBody, setMoveBody] = useState(true)
  const [clouds, setClouds] = useState(true)
  const [moveY, setMoveY] = useState(false)
  return (
    <>
      <h1>SVG Car Animation</h1>
      <div className="card">
        <Switch label='Wheels' value={moveWheels} onChange={(v) => {
          setMoveWheels(v)
          if (!v) { setMoveY(false) }
        }} />
        <Switch label='Body' value={moveBody} onChange={(v) => {
          setMoveBody(v)
          if (!v) { setMoveY(false) }
        }} />
        <Switch label='Clouds' value={clouds} onChange={(v) => {
          setClouds(v)
          if (!v) { setMoveY(false) }
        }} />
        <Switch label='Drive' value={moveY} onChange={() => {
          const move = !moveY
          setMoveY(move)

          if (move) {
            setMoveBody(true)
            setMoveWheels(true)
            setClouds(true)
          }
        }} />
      </div>
      <div className="container">
        <Car clouds={clouds} moveBody={moveBody} moveY={moveY} moveWheels={moveWheels} />
      </div>
    </>
  )
}

export default App
