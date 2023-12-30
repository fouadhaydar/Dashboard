import { ReactComponentElement, useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  Avatar,
  Box,
  Icon,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import ListIcon from "@mui/icons-material/List";
import "../../index.css";
import { tokens } from "../../Theme/constance";
import { useLogIn } from "../../context/useLogIn";
import { useMutation } from "@tanstack/react-query";
import useAxiosInterceptors from "../auth/hooks/useAxiosInterceptor";
import Category from "@mui/icons-material/Category";

interface Item {
  title: string;
  to?: string;
  icon: ReactComponentElement<typeof Icon>;
  selected: string;
  collabsed: boolean;
  setSelected: (title: string) => void;
  func?: () => void;
}

const Item = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  collabsed,
  func,
}: Item) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <MenuItem
      active={selected === title}
      onClick={() => {
        setSelected(title);
        if (to) navigate(to);
        if (func) {
          func();
        }
      }}
      icon={icon}
    >
      {!collabsed && <Typography variant="h6">{title}</Typography>}
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selected, setSelected] = useState("Dashboard");
  const { setLogOut, userAuth } = useLogIn();

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  const collapse = () => {
    setCollapsed((prev) => !prev);
  };

  const btnHover = {
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? theme.palette.background.default
          : "white",
      //   colors.primary[400]
      // : colors.greenAccent[900],
      color:
        theme.palette.mode === "dark"
          ? colors.greenAccent[500]
          : colors.grey[100],
      borderRadius: 10,
      border: `1px solid ${theme.palette.divider}`,
      // borderColor: theme.palette.divider,
    },
  };
  const axiosInterceptor = useAxiosInterceptors();

  const { mutate } = useMutation({
    mutationKey: ["logOut"],
    mutationFn: async () => {
      const { data } = await axiosInterceptor({
        url: "/user/logout",
      });
      return data;
    },
    onSuccess: () => {
      setLogOut();
      navigate("/login");
    },
  });
  const logOut = () => {
    mutate();
  };
  return (
    <Sidebar
      collapsed={collapsed}
      backgroundColor={theme.palette.background.paper}
      style={{
        borderRightColor: theme.palette.divider,
      }}
    >
      {/* toogle menu and the name */}
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        mt={2}
        textAlign={"center"}
      >
        {!collapsed && (
          <Typography padding={"8px"} variant="h5">
            ADMIN
          </Typography>
        )}
        <IconButton onClick={collapse}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        m={2}
      >
        <Avatar variant="circular" style={{ backgroundColor: "white" }} />
        <Box
          display={!collapsed ? "flex" : "none"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography variant="h3" sx={{ mt: 2, mb: 1 }} fontWeight="bold">
            {`${
              userAuth?.userName.toUpperCase()[0]
            }${userAuth?.userName.substring(1)}`}
          </Typography>
          <Typography variant="h6">fancy Admin</Typography>
        </Box>
      </Box>
      {/* menus */}
      <Menu
        style={{ margin: !collapsed ? 24 : 4 }}
        menuItemStyles={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          button: ({ active }) => {
            return {
              ...btnHover,
              backgroundColor: active && btnHover["&:hover"].backgroundColor,
              color: active && btnHover["&:hover"].color,
              borderRadius: 10,
              marginBlock: 6,
              paddingLeft: 19,
              paddingRight: 15,
              border: active && `1px solid ${theme.palette.divider}`,
            };
          },
        }}
      >
        <Item
          title={"Dashboard"}
          to={"/"}
          icon={<HomeOutlinedIcon />}
          selected={selected}
          collabsed={collapsed}
          setSelected={setSelected}
        />
        <Item
          title={"Log Out"}
          icon={<LogoutIcon />}
          selected={selected}
          setSelected={setSelected}
          collabsed={collapsed}
          func={logOut}
        />
      </Menu>
      <Menu
        style={{
          margin: !collapsed ? 24 : 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        menuItemStyles={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          button: ({ active }) => {
            return {
              ...btnHover,
              backgroundColor: active && btnHover["&:hover"].backgroundColor,
              color: active && btnHover["&:hover"].color,
              borderRadius: 10,
              marginBlock: 6,
              border: active && `1px solid ${theme.palette.divider}`,
              paddingLeft: 19,
              paddingRight: 15,
            };
          },
        }}
      >
        <Typography color={colors.grey[300]} variant="h6" p={"20px"}>
          Data
        </Typography>
        <Item
          title={"Managnent Team"}
          to={"team"}
          icon={<PeopleOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          collabsed={collapsed}
        />
        <Item
          title={"Contacts Information"}
          to={"contacts"}
          icon={<ContactsOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          collabsed={collapsed}
        />
        <Item
          title={"Invoices balances"}
          to={"invoices"}
          icon={<CalendarTodayOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          collabsed={collapsed}
        />
        <Item
          title={"Products"}
          to={"products"}
          icon={<ListIcon />}
          selected={selected}
          setSelected={setSelected}
          collabsed={collapsed}
        />
        <Item
          title={"Categories"}
          to={"categories"}
          icon={<Category />}
          selected={selected}
          setSelected={setSelected}
          collabsed={collapsed}
        />
      </Menu>
      <Menu
        style={{
          margin: !collapsed ? 24 : 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        menuItemStyles={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          button: ({ active }) => {
            return {
              ...btnHover,
              backgroundColor: active && btnHover["&:hover"].backgroundColor,
              color: active && btnHover["&:hover"].color,
              borderRadius: 10,
              marginBlock: 6,
              border: active && `1px solid ${theme.palette.divider}`,
              paddingLeft: 19,
              paddingRight: 15,
            };
          },
        }}
      >
        <Typography color={colors.grey[300]} variant="h6" p={"20px"}>
          Pages
        </Typography>
        <Item
          title={"Profile Form"}
          to={"profile-form"}
          icon={<PersonOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          collabsed={collapsed}
        />
        <Item
          title={"Calender"}
          to={"calender"}
          icon={<CalendarTodayOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          collabsed={collapsed}
        />
        <Item
          title={"FQAs"}
          to={"fqa"}
          icon={<HelpOutlineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          collabsed={collapsed}
        />
      </Menu>
      <Menu
        style={{
          margin: !collapsed ? 24 : 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        menuItemStyles={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          button: ({ active }) => {
            return {
              ...btnHover,
              backgroundColor: active && btnHover["&:hover"].backgroundColor,
              color: active && btnHover["&:hover"].color,
              borderRadius: 10,
              marginBlock: 6,
              border: active && `1px solid ${theme.palette.divider}`,
              paddingLeft: 19,
              paddingRight: 15,
            };
          },
        }}
      >
        <Typography color={colors.grey[300]} variant="h6" p={"20px"}>
          Charts
        </Typography>
        <Item
          title={"Bar Chart"}
          to={"bar"}
          icon={<BarChartOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          collabsed={collapsed}
        />
        <Item
          title={"Pie Chat"}
          to={"pie"}
          icon={<PieChartOutlineOutlinedIcon />}
          selected={""}
          setSelected={setSelected}
          collabsed={collapsed}
        />
        {/* <Item
          title={"Line Chart"}
          to={"line"}
          icon={<TimelineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          collabsed={collapsed}
        />
        <Item
          title={"Geography Chart"}
          to={"geography"}
          icon={<MapOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          collabsed={collapsed}
        /> */}
      </Menu>
    </Sidebar>
  );
};
export default SideBar;
