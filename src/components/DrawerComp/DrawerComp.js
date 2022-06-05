import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BalanceIcon from "@mui/icons-material/Balance";
import LogoutIcon from "@mui/icons-material/Logout";

const DrawerComp = () => {
  const [open, setOpen] = useState(false);
  const arrOptions = [
    { icon: <AccountCircleIcon />, user: "Profile" },
    { icon: <BalanceIcon />, user: "Balance" },
    { icon: <LogoutIcon />, user: "Logout" },
  ];

  return (
    <Box>
      <Button onClick={() => setOpen(true)} variant="contained" color="primary">
        Open Drawer
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {arrOptions.map((item, i) => (
            <ListItem key={i} onClick={() => setOpen(false)}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.user} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default DrawerComp;
