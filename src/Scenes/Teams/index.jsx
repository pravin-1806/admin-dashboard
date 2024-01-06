import { Box,Typography,useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import {mockDataTeam} from '../../Data/mockData';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SecurityIcon from '@mui/icons-material/Security';
import Header from "../../Components/Header";

const Team=()=>{
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  const columns=[
    {field:"id",headerName:"ID"},
    {field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},
    {field:"age",headerName:"Age",type:"number",headerAlign:"left",align:"left"},
    {field:"phone",headerName:"Phone Number",flex:1},
    {field:"email",headerName:"Email",flex:1},
    {field:"access",headerName:"Access Level",flex:1,renderCell:({row:{ access }})=>{
        return(
            <Box
              width="60%"
              margin="0 auto"
              padding="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                access==="admin"?
                colors.greenAccent[600]:
                colors.greenAccent[700]
              }
              borderRadius="4px"
            >
            {access==="admin"&&<AdminPanelSettingsIcon/>}
            {access==="manager"&&<SecurityIcon/>}
            {access==="user"&&<LockOpenIcon/>}
            <Typography color={colors.gray[100]} sx={{marginLeft:"5px"}}>
              {access}
            </Typography>
            </Box>
        )
    }},
    ];
    return(
        <Box margin="20px">
            <Header title="TEAM" subtitle="Managing the Team Members"/>
            <Box 
            m="40px 0 0 0" 
            height="65vh"
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                  },
                  "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                  },
                  "& .name-column--cell": {
                    color: colors.greenAccent[300],
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                  },
                  "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                  },
                  "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                  },
                  "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                  },
            }}
            >
                <DataGrid
                columns={columns}
                rows={mockDataTeam}
                />
            </Box>
        </Box>
    )
}

export default Team;