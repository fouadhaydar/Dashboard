import { Box, IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { useColor } from "../../Theme/cunstomeHooks";
import { useState } from "react";
import MenuNotification from "./MenuNotification";
import MenuIcon from "@mui/icons-material/Menu";
import useSideBar from "./context/useSideBar";
import "../../index.css";

const Topbar = () => {
  const theme = useTheme();
  const { toggleColorMode } = useColor();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { setOpen } = useSideBar();

  return (
    <Box display={"flex"} justifyContent={"space-between"} py={2}>
      <IconButton
        onClick={() => {
          setOpen();
        }}
        className="menu-icon"
      >
        <MenuIcon />
      </IconButton>
      {/* <Box
        display={"flex"}
        justifyContent={"space-between"}
        bgcolor={theme.palette.background.paper}
        border={`1px solid ${theme.palette.divider}`}
        borderRadius={"7px"}
        maxWidth={"300px"}
        height={"40px"}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box> */}
      <Box>
        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon sx={{ fontSize: "25px" }} />
          ) : (
            <LightModeOutlinedIcon sx={{ fontSize: "25px" }} />
          )}
        </IconButton>
        <IconButton onClick={handleClick}>
          <NotificationsOutlinedIcon
            sx={{ fontSize: "25px", position: "relative" }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "17px",
              height: "17px",
              backgroundColor: "#F44336",
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: "3px",
              right: "3px",
            }}
          >
            <span style={{ color: "white", fontSize: "12px" }}>2</span>
          </Box>
        </IconButton>
        <MenuNotification
          handleClose={handleClose}
          open={open}
          anchorEl={anchorEl}
        />
        {/* <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        {/* <IconButton onClick={() => navigate("/log-in")}>
          <PersonOutlinedIcon />
        </IconButton> */}
      </Box>
    </Box>
  );
};
export default Topbar;
