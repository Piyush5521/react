import React, { useEffect, useState } from "react";
import ApiInterceptor from "./ApiInterceptor";
import { Box } from "@mui/material";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    ApiInterceptor.get("/posts")
      .then((response) => {
        setPosts(response.data);
      })

      .catch((err) => {
        console.log("This is the error: ", err);
      });
  }, []);

  return (
    <Box sx={{position:'absolute', top:'0', backgroundColor:'white', width:'99vw'}}>
      {posts.map((post) => (
        <Box sx={{ display: "column", }}  key={post.id}>
          <li
            key={post.id}
            style={{ marginRight: "25px", listStyleType: "none", fontWeight:'700' }}
          >
            {post.title} 
          </li> 
          <p style={{ listStyleType: "none" }}> {post.body}</p> <br/>
        </Box> 
      ))}
    </Box>
  );
};

export default Posts;
