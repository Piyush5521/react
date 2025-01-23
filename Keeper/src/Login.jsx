import React from "react";
import "./Login.css";
import Form from "./Form";
import Time from "./Time";

var isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);

function Login () {
    return (
        <>
            <div className="container">
                <Time />
                { isLoggedIn ? <h1>Hello</h1> : <Form /> }
            </div>
        </>
    );
}

export default Login;