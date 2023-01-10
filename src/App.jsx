import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import StaticCard from './components/StaticCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar>

    </Navbar>
    <StaticCard>

    </StaticCard>
    </>
  )
}

export default App
