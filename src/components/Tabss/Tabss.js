import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';
import React, { useState } from 'react';

const Tabss = () => {
  const [value, setValue] = useState(0);

  return (
    <AppBar sx={{ marginTop: '5rem', bgcolor: 'lightblue' }}>
      <Toolbar>
        <Tabs
          indicatorColor="secondary"
          textColor="secondary"
          value={value}
          onChange={(event, val) => setValue(val)}
        >
          <Tab label="First" />
          <Tab label="Second" />
          <Tab label="Third" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Tabss;
