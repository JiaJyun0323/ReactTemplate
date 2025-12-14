import React from "react";
import { Toolbar, Box } from "@mui/material";

import AppHeader from "./layouts/AppHeader";
import NavigationDrawer from "./layouts/NavigationDrawer";
import { useRoutes } from "react-router";
import { routes } from "./routes.jsx";

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
        {useRoutes(routes)}
      </Box>
    </Box>
  );
}
