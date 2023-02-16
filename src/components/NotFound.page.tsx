import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Stack spacing={2} direction={"column"} alignItems="center">
        <Typography variant="h2" component="div" sx={{ fontFamily: "AppBar" }}>
          404 Not Found
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontFamily: "AppBar" }}>
          Page not found
        </Typography>
      </Stack>
    </Box>
  );
};

export default NotFoundPage;
