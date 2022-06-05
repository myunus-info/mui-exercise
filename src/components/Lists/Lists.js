import React from 'react';
import { MailOutlineSharp } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const Lists = () => {
  const listRy = ['first', 'second', 'third', 'fourth', 'fifth'];
  return (
    <List>
      {listRy.map((item, i) => (
        <ListItem key={i} divider>
          <ListItemButton>
            <ListItemIcon>
              <MailOutlineSharp />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Lists;
