import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';

const Containers = () => {
  return (
    <Box>
      <Container sx={{ bgcolor: 'green' }} maxWidth="xs">
        <Typography color={'white'} textAlign={'center'} variant="body1">
          This is XS
        </Typography>
      </Container>
      <br />
      <Container sx={{ bgcolor: 'blue' }} maxWidth="sm">
        <Typography textAlign={'center'} color={'white'} variant="body1">
          This is SM
        </Typography>
      </Container>
      <br />
      <Container sx={{ bgcolor: 'yellowgreen' }} maxWidth="md">
        <Typography textAlign={'center'} color={'white'} variant="body1">
          This is MD
        </Typography>
      </Container>
      <br />
      <Container sx={{ bgcolor: 'limegreen' }} maxWidth="lg">
        <Typography textAlign={'center'} color={'white'} variant="body1">
          This is LG
        </Typography>
      </Container>
      <br />
      <Container sx={{ bgcolor: 'brown' }} maxWidth="xl">
        <Typography textAlign={'center'} color={'white'} variant="body1">
          This is XL
        </Typography>
      </Container>
    </Box>
  );
};

export default Containers;
