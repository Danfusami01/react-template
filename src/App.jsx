import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Events from '../src/pages/dashboard/Events'
import './App.css'
import './pages/dashboard/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <label class="register">Register Form</label>
    <br></br>
    <input placeholder='First name'></input>
    <br></br>
    <input placeholder='Surname'></input>
    <br></br>
    <input placeholder='Last name'></input>
    <br></br>
    <input placeholder='Email'></input>
    <br></br>
    <label>Verify You're human!</label>
    <input type="checkbox" id="Verify" name="Verify" value="Verify"></input>
    <br></br>
    <input placeholder='Password'></input>
    <br></br>
    <button>Submit</button>
    </div>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}


export default App
