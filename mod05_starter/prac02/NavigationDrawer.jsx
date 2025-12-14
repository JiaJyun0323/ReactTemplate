import React from "react";
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  ListItemButton,
} from "@mui/material";
import { Home, People, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function NavigationDrawer() {
  const drawerWidth = 240;

  const menuItems = [
    { text: "首頁", icon: <Home />, path: "/" },
    { text: "用戶管理", icon: <People />, path: "/user/index" },
    { text: "設定", icon: <Settings />, path: "/settings" },
  ];
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#e2e8f0",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItemButton key={item.text} component={Link} to={item.path}>
                <ListItem>
                  <ListItemIcon sx={{ color: "#4a5568" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ color: "#4a5568" }} />
                </ListItem>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
