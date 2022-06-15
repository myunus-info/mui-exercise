import { CssBaseline, Link, Typography, useMediaQuery } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import React, { useState } from 'react';
import Content from './Content';
import Header from './Header';
import Navigator from './Navigator';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const drawerWidth = 256;
const Paperbase = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />

      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        {isSmUp ? null : (
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        )}

        <Navigator
          PaperProps={{ style: { width: drawerWidth } }}
          sx={{ display: { sm: 'block', xs: 'none' } }}
        />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header onDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
          <Content />
        </Box>
        <Box component="footer">
          <Copyright />
        </Box>
      </Box>
    </Box>
  );
};

export default Paperbase;
