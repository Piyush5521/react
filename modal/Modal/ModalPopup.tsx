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
