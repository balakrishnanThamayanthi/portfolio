import { CircularProgress, Box } from "@mui/material";
import React from "react";

/**
 *
 * Loader to cover the whole page.
 * Specifically can use for lazy loading
 */
const Loader = ({ height, ...props }: { height?: string }) => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 2000,
    }}
  >
    <Box
      sx={{
        position: "relative",
      }}
    >
      <CircularProgress
        size={50}
        thickness={2}
        sx={{ color: "rgba(255,255,255,0.1)" }}
        variant="determinate"
        value={100}
      />

      <CircularProgress
        size={50}
        thickness={3}
        sx={{
          color: "#00E5FF",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      />
    </Box>
  </Box>
);

Loader.defaultProps = {
  height: "100vh",
};

export default Loader;
