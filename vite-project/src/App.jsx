import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={23}/>
    </>
  )
}

export default App
