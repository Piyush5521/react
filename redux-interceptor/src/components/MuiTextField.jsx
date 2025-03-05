import { TextField } from "@mui/material";
import React from "react";

const MuiTextField = (props) => {
  return (
    <div>
      <TextField
        label={props.label}
        placeholder={props.placeholder}
        variant="outlined"
        required
        type={props.type}
      />
    </div>
  );
};

export default MuiTextField;
