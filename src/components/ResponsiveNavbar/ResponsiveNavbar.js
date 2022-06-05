import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box } from '@mui/system';
import DrawerComp from './DrawerComp';

const ResponsiveNavbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const navbarItems = ['Products', 'Services', 'Overview', 'Contact Us'];

  return (
    <AppBar
      sx={{
        backgroundImage: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,191,0.96) 100%)',
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
              <ShoppingCartOutlinedIcon />
            </Typography>
            <DrawerComp navbarItems={navbarItems} />
          </>
        ) : (
          <Grid container sx={{ placeItems: 'center' }}>
            <Grid item xs={2}>
              <Typography>
                <ShoppingCartOutlinedIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                value={value}
                indicatorColor="secondary"
                textColor="inherit"
                onChange={(_, val) => setValue(val)}
              >
                {navbarItems.map((item, i) => (
                  <Tab key={i} label={item} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box display={'flex'}>
                <Button
                  sx={{ marginLeft: 'auto', backgroundColor: 'rgba(63,94,251,1)' }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button sx={{ marginLeft: 1, backgroundColor: 'rgba(63,94,251,1)' }} variant="contained">
                  Sign up
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveNavbar;
