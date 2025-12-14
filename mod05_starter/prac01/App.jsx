import React from "react";

import { Toolbar, Box } from "@mui/material";

import AppHeader from "./layouts/AppHeader";
import NavigationDrawer from "./layouts/NavigationDrawer";

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Top AppBar */}
      <AppHeader />
      {/* Left Drawer */}
      <NavigationDrawer />
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f7fafc",
          p: 3,
          minHeight: "100vh",
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
