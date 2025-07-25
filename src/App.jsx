import { useState } from 'react'
import Countdown from "./components/Countdown"
import "./App.css"
import 'leaflet/dist/leaflet.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Countdown />
    </>
  )
}

export default App
