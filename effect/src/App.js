import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import WinSize from './Components/WinSize'
import DigitalClock from './Components/DigitalClock'
import Clock from "./Components/Clock";
import ComponentA from "./Components/ComponentA";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/WinSize" element={<WinSize />}/>
      <Route path="/DigitalClock" element={<DigitalClock />}/>
      <Route path="/Clock" element={<Clock />}/>
      <Route path="/ComponentA" element={<ComponentA />}/>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
