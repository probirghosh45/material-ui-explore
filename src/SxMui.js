import { Box, Button, colors } from "@mui/material";
import React from "react";

const SxMui = () => {
  return (

      <Box  sx={{
        p : "5px",
        border: '2px solid primary.main',
        backgroundColor : 'pink',
        // width : {
        //     xs: 100,
        //     sm : 200,
        //     md : 300,
        //     lg : 400,
        //     xl : 500
        // },
        width : [100,200,300,400,500],
        // display: 'flex',
        gap: 4,
        m : 4
      }}>
        <Button sx={{color : 'success.dark'}} >SX Pros</Button>
        <Button sx={{color : 'success.dark'}} >SX Pros</Button>
        <Button sx={{color : 'success.dark'}} >SX Pros</Button>
        <Button sx={{color : 'success.dark'}} >SX Pros</Button>
        <Button sx={{color : 'success.dark'}} >SX Pros</Button>
        <Button sx={{color : 'success.dark'}} >SX Pros</Button>
      </Box>
  );
};

export default SxMui;
