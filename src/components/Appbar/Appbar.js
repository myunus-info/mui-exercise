import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, Toolbar, Typography } from '@mui/material';

const Appbar = () => {
  return (
    <Box sx={{ marginBottom: '5rem' }}>
      <AppBar>
        <Toolbar>
          <Typography sx={{ cursor: 'pointer' }}>LOGO</Typography>
          <Button color="warning" variant="contained" sx={{ marginLeft: 'auto' }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
