import React, {useState, useEffect, useRef} from 'react'
import "./Home.css";

function Home() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
        inputRef1.current.style.color="black";
    }

    function Btn2Click(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="yellow";
        inputRef3.current.style.backgroundColor="";
        inputRef2.current.style.color="black";
    }

    function Btn3Click(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="yellow";
    }

 
  return (
    <div className='container'>
        <input type="text" className='inputField'  ref={inputRef1}/> <br />
        <button className='clickBtn' onClick={handleClick}>Click me 1!</button>
            <br />
        <input type="text" className='inputField'  ref={inputRef2}/> <br />
        <button className='clickBtn' style={{backgroundColor:'pink', color:'black'}} onClick={Btn2Click}>Click me 2!</button>
        <br />
        <input type="text" className='inputField'  ref={inputRef3}/> <br />
        <button className='clickBtn' style={{backgroundColor:'green'}} onClick={Btn3Click}>Click me 3!  </button>
    </div>
  )
}

export default Home