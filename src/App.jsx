import { useState } from 'react'
import Dashboard from './components/Dashboard.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Dashboard/>
      </div>

      <p className="read-the-docs">
        Santa vaca MrBeast no se que estoy haciendo
      </p>
    </>
  )
}

export default App
