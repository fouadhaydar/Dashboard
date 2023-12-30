import { Box, Typography, useTheme } from "@mui/material";
import Revenue from "../assets/Revenue";

const Card = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        padding: "20px",
        borderRadius: "7px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        // position: "relative",
        height: "120px",
      }}
      border={`1px solid ${theme.palette.divider}`}
    >
      {/* <Box>
        <TrendingUpIcon
          sx={{
            color: "green",
            fontSize: "40px",
          }}
        />
        <span>+20%</span>
      </Box> */}
      <Box
        sx={{
          width: "30%",
        }}
      >
        <Revenue />
      </Box>
      <Box sx={{ width: "70%" }}>
        <Typography variant="h5" fontWeight={"bold"}>
          Total Income
        </Typography>
        <p style={{ margin: 0 }}>Total income for this month$ 20K</p>
      </Box>
    </Box>
  );
};

export default Card;
