import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useRef } from 'react';

function App() {

  // const [count, setCount] = useState(0);

  // let val = useRef(0);

  // let btnRef = useRef();

  // const handleIncrement = () => {
  //     val.current = val.current +1;
  //     console.log("I'm using useRef here",val.current);
  //     setCount(count+1);
  // }

  // const handleChangeColor = () => { 
  //   btnRef.current.style.backgroundColor='red';
  // }


  const [time, setTime] = useState(0);


  let timerRef = useRef(null);

  const handleStartTimer = () => {
    timerRef.current = setInterval(() => {
        setTime(time => time+1);
      }, 1000);
  }

  const handleStopTimer = () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
  }

  const handleResetTimer = () => {
    handleStopTimer();
    setTime(0);
  }


  return (
    <div className="App">
      {/* <button ref={btnRef} onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>
      <button onClick={handleChangeColor}>Change Button Color</button> */}
        <h2>Stopwatch: {time}</h2>
      <button onClick={handleStartTimer}>Start</button> <br/> <br/>
      <button onClick={handleStopTimer}>Stop</button> <br/> <br/>
      <button onClick={handleResetTimer}>Reset</button> <br/> <br/>
    </div>
  );
}

export default App;
