import { Box, Typography,useTheme } from "@mui/material"
import { Header } from "../../components/Header"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import myColors from "../../components/color";
import CustomCell from "../../components/CustomCell";


const Team = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    
    const { backgroundColorHeaderFooter, backgroundColorAction, elementColorOnHover, elementColor } = myColors(theme.palette.mode)

    const coloums:GridColDef[] = [
        {field: "id", headerName: "ID", renderCell: (params) => <CustomCell title={params.row.id} />}, 
        {field: "name", headerName: "Name", flex: 1, renderCell: (params) => <CustomCell title={params.row.name} myColor={elementColor}/>},
        {field: "age", headerName: "Age", type: "number", renderCell: (params) => <CustomCell title={params.row.age} />},
        {field: "phone", headerName: "Phone Number", flex: 1, renderCell: (params) => <CustomCell title={params.row.phone} />},
        {field: "email", headerName: "Email adress", flex: 1, renderCell: (params) => <CustomCell title={params.row.email} />},
        {field: "accessLevel", headerName: "Access Level",flex:1, renderCell: ({ row: { access } }) => {
            return (
                <Box sx={{
                    display:"flex",
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor: access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[800],
                    minwidth:'100px',
                    width:"50%",
                    padding:"7px",
                    borderRadius:"7px",
                    gap: "4px",
                    cursor:'pointer'
                }} > 
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "manager" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                    <Typography>
                        {access}
                    </Typography>
                </Box>
            )
        }}
    ]
    
    return (
        <Box>
            <Header title="Team" subtitle="Managing the Team Members"/>
            <Box my={5} sx={{
                '.MuiDataGrid-columnHeaders' : {
                    backgroundColor: backgroundColorHeaderFooter,
                },
                '.MuiDataGrid-footerContainer': {
                    backgroundColor: backgroundColorHeaderFooter,
                },
                '.MuiDataGrid-row:hover':{
                    backgroundColor: backgroundColorAction,
                    color: elementColorOnHover,
                }, 
                '.MuiDataGrid-row.Mui-selected':{
                    backgroundColor: backgroundColorAction,
                    color: elementColorOnHover,
                },
                ".MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },
            }}>
                <DataGrid 
                    columns={coloums} 
                    rows={mockDataTeam} 
                    checkboxSelection={true}
                />
            </Box>
        </Box>
    )
}

export default Team