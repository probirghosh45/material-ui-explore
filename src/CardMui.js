import { Box, CssBaseline } from "@mui/material";
import React from "react";

const CardMui = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#fe8200",
      }}
    >
      <CssBaseline /> {/* not working */}
    </Box>
  );
};

export default CardMui;
