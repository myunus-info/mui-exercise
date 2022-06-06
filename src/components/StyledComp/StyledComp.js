import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { styled } from '@mui/material/styles';

const StyledComp = () => {
  const CustomizedTypography = styled(Typography)`
    color: #0000ff;

    :hover {
      color: #00004c;
      background: #ddd;
    }
  `;

  return (
    <Box>
      <CustomizedTypography variant="h3">Hello world! How are you?</CustomizedTypography>
    </Box>
  );
};

export default StyledComp;
