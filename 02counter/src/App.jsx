import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  
  // let counter = 15

  const addValue = () => {
    console.log("value added", Math.random(), counter);
    if(counter < 5) counter = counter + 1
    else {}
    setCounter(counter)
  }

  const reduceValue = () => {
    console.log("value reduced", Math.random(), counter);
    if(counter > 0) counter = counter - 1
    else {}
    setCounter(counter)
  }
      
  return (
    <>
     <h1>Test with React</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={reduceValue}
     >reduce value</button>
    </>
  )
}

export default App
