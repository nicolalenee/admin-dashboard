import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box mb="20px">
      <Header title="PIE CHART" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};
export default Pie;
