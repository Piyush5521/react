import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {


  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(increment());
  }

  const handleDecrementClick = () => {
    dispatch(decrement());
  }

  const handleResetClick = () => {
    dispatch(reset());
  }

  const [amount, setAmount] = useState(0); 

  const handleAmtChng = (e) => {  
    setAmount(e.target.value);
  }

  const handleIncByAmt = () => {
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
      <div className="container">
        <button onClick={handleIncrementClick}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>-</button> 
        <br/> <br/> 
        <button onClick={handleResetClick}>Reset</button>
        <br/> <br/> 
        <input 
          type='Number'
          value={amount}
          placeholder='Enter Amount'
          onChange={handleAmtChng}
        />
        <br/> <br/> 
        <button onClick={handleIncByAmt}>Increment By Amount</button>
      </div>
    </>
  )
}

export default App
