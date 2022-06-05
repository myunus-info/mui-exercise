import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Boxes = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      border={5}
      margin={3}
      padding={3}
      bgcolor="#3a6eb733"
      borderRadius={10}
    >
      <Typography>Lorem ipsum dolor sit amet.</Typography>
      <Button>Click me</Button>
      <TextField />
    </Box>
  );
};

export default Boxes;
