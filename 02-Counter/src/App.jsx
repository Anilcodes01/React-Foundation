import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [counter, setCounter] =useState(0)


  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
    console.log("clicked", counter);
  };

  const removeValue = () => {
    counter = counter - 1
    setCounter(counter) 
    console.log('clicked', counter)
  }

  return (
    <>
      <h1>Anil is learning React!</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
