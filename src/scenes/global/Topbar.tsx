
import { Box, IconButton, InputBase, useTheme } from "@mui/material"
import { ColorModeCtx, tokens } from "../../theme"
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeCtx);
    
    return (
        <Box display={"flex"} justifyContent={'space-between'} py={2}>
            <Box display={'flex'} justifyContent={'space-between'} bgcolor={colors.primary[400]}>
                <InputBase sx={{ ml: 2, flex: 1}} placeholder="search"/>
                <IconButton>
                   <SearchIcon/>
                </IconButton>
            </Box>
            <Box>
                <IconButton onClick={colorMode.toggleColorMode}>
                   {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon/>: <LightModeOutlinedIcon/>}
                </IconButton>
                <IconButton>
                   <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton>
                   <SettingsOutlinedIcon/>
                </IconButton>
                <IconButton>
                   <PersonOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
    )
}
export default Topbar