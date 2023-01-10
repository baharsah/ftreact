import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import StaticCard from './components/StaticCard'
import OrderInterface from './components/OrderInterface'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar>

    </Navbar>
    <StaticCard>

    </StaticCard>
    <OrderInterface>
      
    </OrderInterface>
    <Footer>
      
    </Footer>
    </>
  )
}

export default App
