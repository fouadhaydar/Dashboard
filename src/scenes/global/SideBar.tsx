import { ReactComponentElement, useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Avatar, Box, Icon, IconButton, Typography, useTheme } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import '../../index.css'

interface Item {
    title: string,
    to: string,
    icon:  ReactComponentElement<typeof Icon> ,
    selected: string, 
    collabsed: boolean,
    setSelected:(title: string) => void
}

const Item = ({ title, to, icon, selected, setSelected, collabsed }: Item) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    
    return (
        <MenuItem
            active={selected === title}
            onClick={() => {
                setSelected(title)
                navigate(to)
            }}
            icon={icon}
        >
            {!collabsed && <Typography>{title}</Typography>}
        </MenuItem>
);
  };
  
const SideBar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [selected, setSelected] = useState("Dashboard");
    const navigate = useNavigate ();
    
    useEffect (() => {
        navigate('/')
    },[])

    const collapse = () => {
        setCollapsed(prev => !prev);
    }
    const btnHover = {
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? colors.primary[400] : colors.greenAccent[900],
            color: theme.palette.mode === 'dark' ? colors.greenAccent[500] : colors.grey[100],
            borderRadius: 10
          },
    }
    return (
        <Sidebar collapsed = {collapsed}
            backgroundColor={theme.palette.background.default}>
            {/* toogle menu and the name */}
            <Box display={"flex"} justifyContent={'space-around'} mt={2} textAlign={'center'}>
                {!collapsed && <Typography padding={'8px'} variant="h5" >
                    ADMIN
                </Typography>}
                <IconButton onClick={collapse}>
                    <MenuIcon />
                </IconButton> 
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} m={2}>
                <Avatar variant= "circular" style={{backgroundColor: 'white'}}/>
                <Box display={!collapsed ? 'flex' : "none"} flexDirection={'column'} alignItems={'center'}>
                    <Typography variant="h3" sx={{mt: 2,mb:1}} fontWeight="bold">Fouad Haydar</Typography>
                    <Typography variant="h6">fancy Admin</Typography>
                </Box>
            </Box>
            {/* menus */}
            <Menu style={{margin: !collapsed ? 24 : 4}} menuItemStyles={{
                button: ({active}) => {
                    return {
                        ...btnHover,
                        backgroundColor: active && btnHover["&:hover"].backgroundColor,
                        color: active && btnHover["&:hover"].color,
                        borderRadius: 10
                    }
                },
            }} >
                <Item title={'Dashboard'} to={'/'} icon={<HomeOutlinedIcon/>} selected={selected} collabsed={collapsed} 
                setSelected={setSelected} />
            </Menu>
            <Menu style={{margin: !collapsed ? 24 : 4, display: 'flex', flexDirection:'column', justifyContent:'center'}} 
                    menuItemStyles={{
                        button: ({active}) => {
                            return {
                                ...btnHover,
                                backgroundColor: active && btnHover["&:hover"].backgroundColor,
                                color: active && btnHover["&:hover"].color,
                                borderRadius: 10
                            }
                        },
                    }} 
                >
                <Typography color={colors.grey[300]} variant="h6" p={'20px'} >
                    Data
                </Typography>
                <Item title={"Managnent Team"} to={"team"} 
                    icon={<PeopleOutlinedIcon/>} 
                    selected={selected} 
                    setSelected={setSelected} 
                    collabsed={collapsed}/>
                <Item title={"Contacts Information"} to={"contacts"} 
                    icon={<ContactsOutlinedIcon/>} 
                    selected={selected} 
                    setSelected={setSelected} 
                    collabsed={collapsed}/>
                <Item title={"Invoices balances"} to={"invoices"} 
                    icon={<CalendarTodayOutlinedIcon/>} 
                    selected={selected} 
                    setSelected={setSelected}
                    collabsed={collapsed}/>
            </Menu>
            <Menu style={{margin: !collapsed ? 24 : 4, display: 'flex', flexDirection:'column', justifyContent:'center'}}
                menuItemStyles={{
                    button: ({active}) => {
                        return {
                            ...btnHover,
                            backgroundColor: active && btnHover["&:hover"].backgroundColor,
                            color: active && btnHover["&:hover"].color,
                            borderRadius: 10
                        }
                    },
                }} 
                >
                <Typography color={colors.grey[300]} variant="h6" p={'20px'}>
                    Pages
                </Typography>
                <Item title={"Profile Form"} to={"profile-form"} 
                    icon={<PersonOutlinedIcon/>} 
                    selected={selected} 
                    setSelected={setSelected} 
                    collabsed={collapsed}/>
                <Item title={"Calender"} to={"calender"} 
                    icon={<CalendarTodayOutlinedIcon/>} 
                    selected={selected} 
                    setSelected={setSelected}
                    collabsed={collapsed} />
                <Item title={"FQAs"} to={"fqa"} 
                    icon={<HelpOutlineOutlinedIcon/>} 
                    selected={selected} 
                    setSelected={setSelected} 
                    collabsed={collapsed}/>
            </Menu>
            <Menu style={{margin: !collapsed ? 24 : 4, display: 'flex', flexDirection:'column', justifyContent:'center'}}
            menuItemStyles={{
                button: ({active}) => {
                    return {
                        ...btnHover,
                        backgroundColor: active && btnHover["&:hover"].backgroundColor,
                        color: active && btnHover["&:hover"].color,
                        borderRadius: 10
                    }
                },
            }} 
            >
                <Typography color={colors.grey[300]} variant="h6" p={'20px'}>
                    Charts
                </Typography>
                <Item title={"Bar Chart"} to={"bar"} 
                    icon={<BarChartOutlinedIcon/>} 
                    selected={selected} 
                    setSelected={setSelected}
                    collabsed={collapsed}/>
                <Item title={"Pie Chat"} to={"pie"} 
                    icon={<PieChartOutlineOutlinedIcon/>} 
                    selected={""} 
                    setSelected={setSelected} 
                    collabsed={collapsed}/>
                <Item title={"Line Chart"} to={"line"} 
                    icon={<TimelineOutlinedIcon/>} 
                    selected={selected} 
                    setSelected={setSelected} 
                    collabsed={collapsed}/>
                <Item title={"Geography Chart"} to={"geography"} 
                    icon={<MapOutlinedIcon/>} 
                    selected={selected} 
                    setSelected={setSelected} 
                    collabsed={collapsed}/>
            </Menu>
        </Sidebar>
    )
}
export default SideBar