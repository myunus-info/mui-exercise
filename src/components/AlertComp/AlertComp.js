import { Alert } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AlertComp = () => {
  return (
    <Box>
      <Alert sx={{ margin: "1rem" }} severity="error" variant="filled">
        This is an error alert - check it out!
      </Alert>
      <Alert sx={{ margin: "1rem" }} severity="warning" variant="outlined">
        This is an warning alert - check it out!
      </Alert>
      <Alert sx={{ margin: "1rem" }} severity="info" variant="filled">
        This is an info alert - check it out!
      </Alert>
      <Alert sx={{ margin: "1rem" }} severity="success" variant="outlined">
        This is an success alert - check it out!
      </Alert>
    </Box>
  );
};

export default AlertComp;
