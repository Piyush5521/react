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
