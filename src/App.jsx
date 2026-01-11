import { useState } from 'react'
import Header from './Components/Header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Asegúrate de que el return envuelva todo tu HTML/JSX
  return (
    <>
      <div>
        <Header />
      </div>
    </>
  )
}

export default App