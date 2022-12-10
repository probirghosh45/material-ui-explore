import { Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const RatingMui = () => {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />

      <Typography component="legend">Half Rating</Typography>
      <Stack spacing={2}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
    </Box>
    
  );
};

export default RatingMui;
