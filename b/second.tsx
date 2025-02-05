import { createContext, useState, ReactNode } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

// Define the context type
interface ModalContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid deepskyblue",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

// ModalProvider component
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">Text in a Modal</Typography>
          <Typography>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </ModalContext.Provider>
  );
};

// Export context for use in consumers
export { ModalContext };



import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import { Button } from "@mui/material";

// Button to open the modal
const ModalPopup = () => {
  // Safeguard the context with a type guard
  const context = useContext(ModalContext);

  // Check if context is null
  if (!context) {
    throw new Error("ModalPopup must be used within a ModalProvider");
  }

  const { setOpen } = context;

  // Trigger modal to open
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Button onClick={handleOpen} sx={{ backgroundColor: "deepskyblue", color: "white" }}>
      Open Modal
    </Button>
  );
};

export default ModalPopup;


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
