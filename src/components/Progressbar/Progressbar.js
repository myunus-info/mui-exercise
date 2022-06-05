import { CircularProgress, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Progressbar = () => {
  return (
    <Box>
      <LinearProgress />
      <CircularProgress size={25} color="secondary" />
    </Box>
  );
};

export default Progressbar;
