// components/ui/Loading.tsx
import React from "react";
import { Dialog } from "@mui/material";

interface LoadingProps {
  open: boolean;
}

const Loading: React.FC<LoadingProps> = ({ open }) => {
  return (
    <Dialog
      open={open}
      maxWidth={false}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(50, 50, 50, 0.8)",
        },
        "& .MuiDialog-paper": {
          backgroundColor: "transparent",
          boxShadow: "none",
          overflow: "visible",
        },
      }}
    >
      <div className="loader" />
    </Dialog>
  );
};

export default Loading;
