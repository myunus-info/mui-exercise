import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#f4005e',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
    },
  },
  breakpoints: {
    values: {
      xs: 200,
    },
  },
});
