import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Buttons = () => {
  const btnMargin = {
    container: {
      width: '1000px',
      display: 'flex',
      justifyContent: 'space-around',
      margin: '1rem auto',
    },
  };

  return (
    <Box sx={btnMargin.container}>
      <Button onClick={() => console.log('Button one')} color="primary" variant="contained">
        Button one
      </Button>
      <Button onClick={() => console.log('Button two')} color="secondary" variant="outlined">
        Button two
      </Button>
      <Button onClick={() => console.log('Button three')} color="success" variant="contained">
        Button three
      </Button>
      <Button onClick={() => console.log('Button four')} color="error" variant="text">
        Button four
      </Button>
      <Button onClick={() => console.log('Button five')} color="info" variant="outlined">
        Button five
      </Button>
      <Button onClick={() => console.log('Button six')} color="warning" variant="contained">
        Button six
      </Button>
    </Box>
  );
};

export default Buttons;
