import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function Settings() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, minWidth: 300, textAlign: "center" }}>
        <Typography variant="h5" component="h1" gutterBottom>
          這是設定頁面
        </Typography>
        <Typography variant="body1" color="text.secondary">
          您可以在這裡調整您的應用程式設定。
        </Typography>
      </Paper>
    </Box>
  );
}
