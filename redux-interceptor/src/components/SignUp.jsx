import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MuiTextField from "./MuiTextField";
import "./CSS/Login.css";
import { Link } from "react-router-dom";
import MuiButton from "./MuiButton";

const SignUp = () => {
  return (
    <Box className="login-page-container">
      <h1 className="login_page_h1">Sign Up</h1>
      <br />
      <Stack
        width={"12%"}
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
        <MuiTextField
          label={"Username"}
          placeholder={"username"}
          type={"text"}
        />
        <br />
        <MuiTextField
          label={"Password"}
          placeholder={"password"}
          type={"password"}
        />
        <br />
        <MuiButton btnText={"Signup"} />
        <br />
        <Typography>
          Already Have Account: <Link to="/">Login</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default SignUp;
