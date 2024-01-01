import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import Card from "./components/Card";
import BarChart from "../../components/BarChart";
import MyResponsivePie from "../../components/PieChart";
import LineChart from "../../components/LineChart";
import Trafic from "./components/Trafic";

const Dashboard = () => {
  return (
    <Box
      py={2}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      height={"100vh"}
    >
      <Header title="Dashboard" subtitle={"Welcome to your dashboard"} />
      <Box
        sx={{
          display: "grid",
          "&>*:nth-child(1)": {
            gridColumn: "span 1",
          },
          "&>*:nth-child(2)": {
            gridColumn: "span 1",
          },
          "&>*:nth-child(3)": {
            gridColumn: "span 1",
          },
          "&>*:nth-child(4)": {
            gridColumn: "span 1",
          },

          "@media (min-width: 300px)": {
            gridTemplateColumns: "1fr",
            gap: "10px",
            "&>*:nth-child(5)": {
              gridColumn: "span 1",
            },
            "&>*:nth-child(6)": {
              gridColumn: "span 1",
            },
            "&>*:nth-child(7)": {
              gridColumn: "span 1",
            },
          },
          "@media (min-width: 780px)": {
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
            "&>*:nth-child(5)": {
              gridColumn: "span 2",
            },
            "&>*:nth-child(6)": {
              gridColumn: "span 2",
            },
            "&>*:nth-child(7)": {
              gridColumn: "span 2",
            },
            "&>*:nth-child(8)": {
              gridRowStart: "1",
              gridRowEnd: "5",
              gridColumnStart: "2",
              gridColumnEnd: "3",
            },
          },
          "@media (min-width: 1200px)": {
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "20px",
            "&>*:nth-child(5)": {
              gridColumn: "span 2",
            },
            "&>*:nth-child(6)": {
              gridColumn: "span 2",
            },
            "&>*:nth-child(7)": {
              gridColumn: "span 3",
            },
            "&>*:nth-child(8)": {
              gridRowStart: "3",
              gridRowEnd: "4",
              gridColumnStart: "4",
              gridColumnEnd: "5",
            },
          },
          paddingBottom: "40px",
        }}
      >
        {/*  */}
        <Card />
        <Card />
        <Card />
        <Card />
        {/* </Box> */}
        {/* <Box sx={{ display: "flex", gap: "20px", height: "50vh", width: "100%" }}> */}
        <BarChart height="400px" />
        <MyResponsivePie height="400px" direction="row" />
        <LineChart height="400px" />
        <Trafic />
      </Box>
    </Box>
  );
};
export default Dashboard;
