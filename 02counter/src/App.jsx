import { useState } from 'react'
import './App.css'

function App() {
  const[counter, setCounter] = useState(0)
  const counterPlus = () => {
    setCounter(counter + 1)
  }

  const counterMinus = () => {
    if(counter === 0) {
      return;
    }
    setCounter(counter - 1)
  }
  return (
    <>
    <h2>counter value: {counter}</h2>
    <button
    onClick={counterPlus}
    >
      addCounter
    </button>
    {" "}
    <button
    onClick={counterMinus}
    >
      removeCounter
    </button> 
    </>
  )
}

export default App
