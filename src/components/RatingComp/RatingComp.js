import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const RatingComp = () => {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Rating precision={0.5} onChange={(_, val) => setValue(val)} />
      <Typography>Max is {value} star-rated instructor </Typography>
    </Box>
  );
};

export default RatingComp;
