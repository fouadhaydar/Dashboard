import { Box,useTheme } from "@mui/material"
import { Header } from "../../components/Header"
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from "../../data/mockData";
import myColors from "../../components/color";
import CustomCell from "../../components/CustomCell";


const Contact = () => {
    const theme = useTheme()
    const { backgroundColorAction, backgroundColorHeaderFooter, elementColor, elementColorOnHover} = myColors(theme.palette.mode)

    const coloums:GridColDef[] = [
        {field: "id", headerName: "ID", renderCell: (params) => <CustomCell title={params.row.id} /> }, 
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-contact", renderCell: (params) => <CustomCell title={params.row.name} myColor={elementColor}/>},
        {field: "age", headerName: "Age", type: "number", renderCell: (params) => <CustomCell title={params.row.age} />},
        {field: "phone", headerName: "Phone Number", flex: 1, renderCell: (params) => <CustomCell title={params.row.phone} />},
        {field: "email", headerName: "Email adress", flex: 2, renderCell: (params) => <CustomCell title={params.row.email} />},
        {field: "address", headerName: "Adress",flex: 2, renderCell: (params) => <CustomCell title={params.row.address} /> },
        {field: "city", headerName: "City", renderCell: (params) => <CustomCell title={params.row.city} />},
        {field: "zipCode", headerName: "Zip Code", renderCell: (params) => <CustomCell title={params.row.zipCode} />},
        {field: "registrarId", headerName: "Registrar Id", renderCell: (params) => <CustomCell title={params.row.registrarId} />}
    ]
    
    return (
        <Box>
            <Header title="Contact" subtitle="List of Contacts for Future Reference"/>
            <Box my={5} sx={{
                '.MuiDataGrid-toolbarContainer' : {
                    padding: 2,
                },
                '.MuiDataGrid-columnHeaders' : {
                    backgroundColor: backgroundColorHeaderFooter
                },
                '.MuiDataGrid-footerContainer': {
                    backgroundColor: backgroundColorHeaderFooter
                },
                '.MuiDataGrid-row:hover':{
                    backgroundColor: backgroundColorAction,
                    color: elementColorOnHover,
                }, 
                '.MuiButton-textPrimary': {
                    color: elementColor,
                },
                
            }}>
                <DataGrid 
                    columns={coloums} 
                    rows={mockDataContacts} 
                    slots={{ toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )
}

export default Contact