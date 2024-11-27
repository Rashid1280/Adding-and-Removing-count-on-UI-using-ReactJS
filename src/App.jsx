import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)

const addValue = () =>{
  setCounter(counter+1)
}

const removeValue = () =>{
  if(counter<=0){
    console.log("negative");
    
  }else{
    setCounter(counter-1)

  }
}

  return (
    <>
    <h1>Let's have some fun</h1>
    <button onClick={addValue}>Add count : {counter}</button>
    <button onClick={removeValue}>Remove count : {counter}</button>
    </>
  )
}

export default App
