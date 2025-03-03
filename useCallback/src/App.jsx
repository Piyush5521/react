import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <div>
        Count: {count}
      </div>
      <br />
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <br />
      <div>
        <ChildComponent 
        buttonName={'Click me'}
        handleClick={handleClick}/>
      </div>

      <br />
      <ExpensiveComponent/>
    </div>
  )
}

export default App
