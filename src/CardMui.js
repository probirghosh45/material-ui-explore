import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  alpha,
  styled,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeroCard from "./HeroCard";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { Box } from "@mui/system";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      text: {
        // primary: grey[900],
        // secondary: grey[800],
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  }); //     const GreenSwitch = styled(Switch)(({ theme }) => ({
  //     "& .MuiSwitch-switchBase.Mui-checked": {
  //       color: pink[600],
  //       "&:hover": {
  //         backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
  //       },
  //     },
  //     "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
  //       backgroundColor: pink[600],
  //     },
  //   }));
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          //   bgcolor: "indianred",
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* <GreenSwitch
        //   defaultChecked          
        onClick={()=>setDarkMode(!darkMode)}
        {...label}
        /> */}
        <Switch {...label} onClick={() => setDarkMode(!darkMode)} />
        <CssBaseline />
        <HeroCard />
      </Box>
    </ThemeProvider>
  );
}

export default App;
