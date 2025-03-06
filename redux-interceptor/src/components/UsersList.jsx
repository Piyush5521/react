import React, { useEffect, useState } from "react";
import ApiInterceptor from "./ApiInterceptor";
import { Box } from "@mui/material";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    ApiInterceptor.get("/users")
      .then((response) => {
        console.log("Username: ", response.data[0].username);
        setUsers(response.data);
      })

      .catch((err) => {
        console.log("This is the error: ", err);
      });
  }, []);

  return (
    <Box sx={{position:'absolute', top:'0', width:'100vw', height:'100vh'}}>
      {users.map((user) => (
        <Box sx={{ display: "flex", justifyContent:'space-around' }}  key={user.id}>
          <li
            key={user.id}
            style={{ marginRight: "25px", listStyleType: "none" }}
          >
            {user.username}{" "}
          </li>{" "}
          <li style={{ listStyleType: "none" }}> {user.email}</li>
        </Box>
      ))}
    </Box>
  );
};

export default UsersList;
