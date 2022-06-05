import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Box } from "@mui/material";

const SnackbarComp = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => setState({ ...newState, open: true });
  const handleClose = () => setState({ ...state, open: false });

  return (
    <Box>
      <Button
        onClick={handleClick({
          vertical: "top",
          horizontal: "center",
        })}
      >
        Top-Center
      </Button>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
        autoHideDuration={6000}
      >
        <Alert
          onClose={handleClose}
          variant="filled"
          severity="success"
          sx={{ width: "100%" }}
        >
          Your order placement is successful!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SnackbarComp;
