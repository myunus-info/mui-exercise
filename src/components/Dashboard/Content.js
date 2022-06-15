import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

const Content = () => {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{ disableUnderline: true, sx: { fontSize: 'default' } }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ mr: 1 }}>
                Add User
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        No users for this project yet
      </Typography>
    </Paper>
  );
};

export default Content;
