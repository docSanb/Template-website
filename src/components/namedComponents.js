import { Box, Typography } from "@mui/material";
import { center } from "../utils";

export const NotFound = () => {
  return (
    <Box sx={center}>
      <Typography variant="h1">OOPS</Typography>
      <Typography variant="body">Not Found</Typography>
    </Box>
  );
};

export const NotDeveloped = () => {
  return (
    <Box sx={center}>
      <Typography variant="h2">Not Developed</Typography>
    </Box>
  );
};
