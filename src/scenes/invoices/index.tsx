import { Box, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {} from "@emotion/react";
import { mockDataInvoices } from "../../data/mockData";
import CustomCell from "../../components/CustomCell";
import myColors from "../../components/color";

const Invoices = () => {
  const theme = useTheme();
  const { backgroundColorAction, elementColor, elementColorOnHover } = myColors(
    theme.palette.mode
  );

  const coloums: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      renderCell: (params) => <CustomCell title={params.row.id} />,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-contact",
      renderCell: (params) => (
        <CustomCell title={params.row.name} myColor={elementColor} />
      ),
    },
    {
      field: "cost",
      headerName: "Cost",
      renderCell: (params) => (
        <CustomCell title={`$${params.row.cost}`} myColor={elementColor} />
      ),
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      renderCell: (params) => <CustomCell title={params.row.phone} />,
    },
    {
      field: "email",
      headerName: "Email adress",
      flex: 1,
      renderCell: (params) => <CustomCell title={params.row.email} />,
    },
    {
      field: "date",
      headerName: "Date",
      renderCell: (params) => <CustomCell title={params.row.date} />,
    },
  ];

  return (
    <Box>
      <Header title="Invoices" subtitle="List of Invoice Balances" />
      <Box
        my={5}
        sx={{
          bgcolor: theme.palette.background.paper,
          ".MuiDataGrid-toolbarContainer": {
            padding: 2,
          },
          ".MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.default,
            fontSize: "14px",
          },
          ".MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.default,
          },
          ".MuiCheckbox-root": {
            color: `${elementColor} !important`,
          },
          ".MuiDataGrid-row:hover": {
            backgroundColor: backgroundColorAction,
            color: elementColorOnHover,
          },
          ".MuiDataGrid-row.Mui-selected": {
            backgroundColor: backgroundColorAction,
            color: elementColorOnHover,
          },
        }}
      >
        <DataGrid
          columns={coloums}
          rows={mockDataInvoices}
          checkboxSelection={true}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
