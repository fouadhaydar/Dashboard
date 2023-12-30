import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import MyResponsivePie from "../../components/PieChart";

const Pie = () => {
  return (
    <Box>
      <Header title="Pie Chart" subtitle="" />
      <Box height={"100vh"} color={"white"}>
        <MyResponsivePie height="100%" />
      </Box>
    </Box>
  );
};

export default Pie;
