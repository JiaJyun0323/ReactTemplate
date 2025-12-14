import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";

export default function AppHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#4a5568",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              UCOM
            </Typography>
            <Typography variant="h6">管理系統</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Notifications */}
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            {/* 點選之後會跳出使用者選單 */}
            <IconButton color="inherit" onClick={handleClick}>
              <Avatar sx={{ bgcolor: "#718096" }} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
