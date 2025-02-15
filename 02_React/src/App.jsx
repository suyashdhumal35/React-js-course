import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addvalue = () => {
    if (counter >= 20) {
      return "count can't be greater then 20";
    } else {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter <= 0) {
      return "count can't be negative";
    } else {
      setCounter(counter - 1);
    }
  };

  // let counter = 15;

  return (
    <>
      <h1>Suyash and React</h1>
      <h2>counter value :{counter} </h2>
      <button onClick={addvalue}>ADD value {counter}</button>
      <br />
      <button onClick={removeValue}> Remove value {counter}</button>
    </>
  );
}

export default App;
