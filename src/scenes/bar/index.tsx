import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height={"100vh"}>
        <BarChart height="100%" />
      </Box>
    </Box>
  );
};

export default Bar;
