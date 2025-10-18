import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style ={{width: '100%', display: 'flex', flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', height: '100vh'}}>

      <div className="card" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>


      <div className="card" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>  
        <div  style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <h1>Vite + React</h1>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          
        </div>
        
        <div  style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        </div>
      
      </div>

    </div>


  )
}

export default App
