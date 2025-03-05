import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/AuthSlice";
import "./CSS/Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const backtoLogin = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    backtoLogin("/");
  };

  if (!isAuthenticated) {
    return <Box>Please Login</Box>;
  }
  return (
    <Box className="user-dashboard">
      <Box className="user-dashboard-navbar">
        {
          <Typography variant="h4" className="dashboard-heading">
            Welcome {user ? user.username : null}{" "}
          </Typography>
        }
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
