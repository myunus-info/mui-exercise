import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import React, { useState } from 'react';
import { SendToMobile } from '@mui/icons-material';

const ListNested = () => {
  const [open, setOpen] = useState(false);
  const hndleClick = () => setOpen(!open);

  return (
    <List>
      <ListItem divider>
        <ListItemButton onClick={hndleClick}>
          <ListItemIcon>
            <PlaylistAddCheckIcon />
          </ListItemIcon>
          <ListItemText primary="Expnd the list" />
        </ListItemButton>
      </ListItem>

      <Collapse in={open}>
        <List>
          {['first', 'second', 'third', 'fourth', 'fifth'].map((item, i) => (
            <ListItem key={i} divider>
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemIcon>
                  <SendToMobile />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default ListNested;
