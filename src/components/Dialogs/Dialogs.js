import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const Dialogs = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ marginTop: '12rem' }}>
      <Button variant="contained" color="success" onClick={handleClick}>
        Open Dialog
      </Button>
      <Dialog open={open}>
        <DialogTitle>My first dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, magnam? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Numquam architecto fugiat molestiae at nulla ipsum
            dolorum quo id voluptates ducimus.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dialogs;
