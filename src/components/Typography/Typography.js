import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Texting = () => {
  return (
    <Box>
      <Typography
        align="center"
        variant="h5"
        mx={10}
        py={10}
        sx={{ color: 'red', border: '1px solid red', borderRadius: '0.5rem', cursor: 'pointer' }}
      >
        Hello World
      </Typography>
    </Box>
  );
};

export default Texting;
