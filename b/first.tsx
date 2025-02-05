// Provider ---->>> (ModalContext.tsx)
import { Button } from "@mui/material";
import React, { createContext, useState, useContext, ReactNode } from "react";
import "./ModalContext.css"
// import { useNavigate } from "react-router-dom";


interface ModalContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}


export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  // const navigate=useNavigate()
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleOpen=()=>{
    // navigate("../preview/abc/hg")
    setOpen(true)
  }

  
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      <Button
        className="btnDes"
        onClick={handleOpen}
        sx={{
          backgroundColor: "deepskyblue",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Open modal
      </Button>
      {children} {/ Render children /}
    </ModalContext.Provider>
  );
};

export { ModalContext };


// useContext ------> (ModalPopup.tsx)
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { ModalContext } from "./ModalContext"; // Adjust the import path if needed

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",  // Use Material UI's default paper background
  border: "2px solid deepskyblue",  // Border color can be customized
  backgroundColor: '#333',
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

export default function ModalPopup() {
  // Type Guard to check if context is available
  const context = useContext(ModalContext);

  // If context is not available, throw error
  if (!context) {
    throw new Error("ModalPopup must be used within a ModalProvider");
  }

  const { open, setOpen } = context;

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" color="deepskyblue">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, color: "white" }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Button
          className="btnDes"
          onClick={handleClose}
          sx={{
            backgroundColor: "deepskyblue",
            color: "white",
            mt: 3,
            fontWeight: "bold",
            '&:hover': {
              backgroundColor: 'dodgerblue',
            }
          }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}

// (PreviewPage.tsx) ------->>>

import { Box } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ModalProvider } from "../Modal/ModalContext";
import ModalPopup from "../Modal/ModalPopup";

const PreviewPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname.split("/"));
  }, [location]);

  return (
    <>
      <Box sx={{ color: "red" }}>hii</Box>
      <ModalProvider>
        <ModalPopup />
      </ModalProvider>
    </>
  );
};

export default PreviewPage;
