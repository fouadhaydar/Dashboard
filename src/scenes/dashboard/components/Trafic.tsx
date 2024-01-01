import { Box, Divider, Typography, useTheme } from "@mui/material";

const Trafic = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        paddingTop: "20px",
        paddingBottom: "20px",
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "7px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography variant="h4" padding={"10px"}>
        Traffic By Platforme
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "90%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography>Google </Typography>
          <Box>
            <span>20%</span>
          </Box>
        </Box>
        <Divider variant="fullWidth" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography>Youtube</Typography>
          <span>10%</span>
        </Box>
        <Divider variant="fullWidth" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography>Instagram</Typography>
          <span>30%</span>
        </Box>
        <Divider variant="fullWidth" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Typography>FaceBook</Typography>
          <span>40%</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Trafic;
