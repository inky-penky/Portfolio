import { useState } from 'react'
import './App.scss'
import Navbar from './component/Navbar'
import Home from './component/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
