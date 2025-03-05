import React, { useState } from "react";
import "./CSS/Login.css";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";  
import { login } from '../redux/AuthSlice';

export const Login = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUser = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleClick = () => {
        if(username === 'admin' && password === 'admin') {
            dispatch(login({username}));
            navigate('/dashboard');
        }
        else{
            alert('Invalid Credentials');
        }
    }

  return (
    <Box className="login-page-container">
      <h1 className="login_page_h1">User Login</h1>
      <br />
      <Stack
        spacing={2}
        direction="column"
        width={"240px"}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2rem",
          border: "1px solid black",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "2px 2px 3px rgb(0, 0, 0, 0.2)",
        }}
      >
      
        <TextField label="username" onChange={handleChangeUser}/>
        <TextField label="password" type="password" onChange={handleChangePassword} />
        
       <Button variant="contained" onClick={handleClick}>Login</Button>
        <Typography>
            Create Account: <Link to="/signup">SignUp</Link>
        </Typography>
      </Stack>
    </Box>
  );
};
