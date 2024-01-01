import { Box, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

const DataCard = ({ title, data }: { title: string; data: ReactNode }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        alignItems: "flex-end",
        backgroundColor: theme.palette.background.default,
        padding: "20px",
        borderRadius: "7px",
      }}
    >
      <Typography variant="h4">{title}: </Typography>
      {data}
    </Box>
  );
};

export default DataCard;
