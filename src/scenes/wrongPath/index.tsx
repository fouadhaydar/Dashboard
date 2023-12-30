import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { tokens } from "../../Theme/constance";

const WrongPath = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <p style={{ fontSize: 20 }}>wrong path ....</p>
      <NavLink to="/" color="white">
        {" "}
        go to dashboard{" "}
      </NavLink>
    </Box>
  );
};
export default WrongPath;
