import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';

const DrawerComp = ({ navbarItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { backgroundColor: '#a05cfcf5' },
        }}
      >
        <List>
          {navbarItems.map((item, i) => (
            <ListItem key={i} onClick={() => setOpen(false)} divider>
              <ListItemButton>
                <ListItemText primary={item} sx={{ color: '#fff' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: 'auto', color: 'ButtonFace' }} onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <MenuOutlinedIcon />}
      </IconButton>
    </>
  );
};

export default DrawerComp;
