import { Box } from "@mui/material"
import Header from "../../Components/Header";
import PieChart from "../../Components/PieChart";

function Pie() {
  return (
    <Box margin="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
      <Box height="75vh">
        <PieChart/>
      </Box>
    </Box>
  )
}

export default Pie
