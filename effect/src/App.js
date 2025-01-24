import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import WinSize from './Components/WinSize'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/WinSize" element={<WinSize />}/>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
