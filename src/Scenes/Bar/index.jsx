import { Box } from "@mui/material";
import Header from "../../Components/Header";
import BarChart from "../../Components/BarChart"; 

function Bar() {
  return (
    <Box margin="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
      <Box height="75vh">
        <BarChart/>
      </Box>
    </Box>
  )
}

export default Bar
