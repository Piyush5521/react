import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "./App.css";
import notes from "./notes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import RegisterHome from "./RegisterHome";
import ArrObj from "./ArrObj";
import Button from "./Button";
import MyComponents from "./MyComponents";
import Counter from "./Components/Counter";
import HandleChange from "./Components/HandleChange";
import ColorPicker from "./Components/ColorPicker";
import MyComp from "./Components/MyComp";

function App() {
  return (
    <BrowserRouter> 
    <Routes>
    <Route path="/Login" element={<Login />}/>
    <Route path="/Register" element={<RegisterHome />}/>
    <Route path="/ArrObj" element={<ArrObj />}/>
    <Route path="/Button" element={<Button />}/>
    <Route path="/MyComponents" element={<MyComponents />} />
    <Route path="/Components/Counter" element={<Counter />} />
    <Route path="/Components/HandleChange" element={<HandleChange />} />
    <Route path="/Components/ColorPicker" element={<ColorPicker />} />
    <Route path="/Components/MyComp" element={<MyComp />} />
    {/* <Route path="/" element={<Home />}/> */}
    {/* <div>
      <Header />
        <div className="container">
          {notes.map( noteItem => (
             <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
          ))}
        </div>
      <Footer />
    </div> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
