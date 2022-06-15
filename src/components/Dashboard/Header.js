import { AppBar, Avatar, Grid, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';

const Header = props => {
  const { onDrawerToggle } = props;

  return (
    <AppBar color="primary" position="sticky" elevation={0}>
      <Toolbar>
        <Grid container spacing={1} alignItems="center">
          <Grid item sx={{ display: { sm: 'none', xs: 'block' } }}>
            <IconButton color="inherit" aria-label="open drawer" onClick={onDrawerToggle} edge="start">
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

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
