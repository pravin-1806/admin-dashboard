import { Box} from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import {mockDataContacts} from '../../Data/mockData';
import Header from "../../Components/Header";
import {useTheme} from "@mui/material";

const Team=()=>{
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  const columns=[
    {field:"id",headerName:"ID",flex:0.5},
    {field:"registrarId",headerName:"Registrar ID"},
    {field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},
    {field:"age",headerName:"Age",type:"number",headerAlign:"left",align:"left"},
    {field:"phone",headerName:"Phone Number",flex:1},
    {field:"email",headerName:"Email",flex:1},
    {field:"address",headerName:"Address",flex:1},
    {field:"city",headerName:"City",flex:1},
    {field:"zipCode",headerName:"Zipcode",flex:1},
    ];
    return(
        <Box margin="20px">
            <Header title="CONTACT" subtitle="List of Contact For Future Reference"/>
            <Box 
            m="10px 0 0 0" 
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
                  "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                    color:`${colors.gray[100]} !important`,
                  }
            }}
            >
                <DataGrid
                columns={columns}
                rows={mockDataContacts}
                slots={{toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Team;