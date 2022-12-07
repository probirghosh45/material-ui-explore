import { Button, CssBaseline } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* props -> variant ="text/undefined/contained/outlined" */}
      <Button variant="outlined" color="secondary">
        Hello Material UI
      </Button>
    </React.Fragment>
  );
};

export default Home;
