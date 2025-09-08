import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.module.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='{style.appContainer'>
        <h1>Hora de Brasília</h1>
        <Relogio/>
      </div>
    </>
  )
}

export default App
