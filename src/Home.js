import { Button, ButtonGroup, CssBaseline } from "@mui/material";
import React from "react";

const Home = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <React.Fragment>
      <CssBaseline />
      {/* props -> variant ="text/undefined/contained/outlined" */}
      <Button variant="outlined" color="secondary">
        Hello Material UI
      </Button>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>

      {/* Button Group */}
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>


    </React.Fragment>
  );
};

export default Home;
