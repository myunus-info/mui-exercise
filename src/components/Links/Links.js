import { Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Links = () => {
  return (
    <Box sx={{ marginTop: '1rem' }}>
      <Link underline="none" variant="button" href="https://www.fb.com" color="primary">
        Visit Facebook
      </Link>
    </Box>
  );
};

export default Links;
