import { Box, CssBaseline, Switch } from "@mui/material";
import React from "react";
import HeroCard from "./HeroCard";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));
  

const CardMui = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (

    <Box
    sx={{
     height: "100vh",
     width : "100vw",
     bgcolor:"#fe8200",
     display:"grid",
     placeItems:"center"
    }}
    >
    <CssBaseline/> {/* not working */}
    {/* <Switch {...label} defaultChecked color="warning" /> */}
    <GreenSwitch {...label} defaultChecked />
     <HeroCard/>
    </Box>

    
  );
};

export default CardMui;
