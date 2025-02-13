import { useState } from 'react';
import './App.css';
import ButtonsContainer from './Components/ButtonsContainer';
import Display from './Components/Display';


function App() {

  const [calval, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === "c"){
      setCalVal("");
    } else if (buttonText === "="){
      const result = eval(calval);
      setCalVal(result);
    } else {
      const newDisplayValue = calval + buttonText;
      setCalVal(newDisplayValue)
    }
  };

  return (
    <div className="App">
      <div className="containerss">
        <Display displayvalue={calval} />
        <ButtonsContainer onButtonClick={onButtonClick}/>     
        </div>
    </div>
  );
}

export default App;
