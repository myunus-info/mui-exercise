import { AppBar, Avatar, Grid, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Header = props => {
  const { onDrawerToggle } = props;

  return (
    <AppBar>
      <Toolbar>
        <Grid container>
          <Grid item>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item>Authentication</Grid>
          <Grid item>
            <IconButton color="inherit" sx={{ p: 0.5 }}>
              <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="My Avatar" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
