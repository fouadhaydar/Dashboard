import { Box, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
// import { mockDataContacts } from "../../data/mockData";
import myColors from "../../components/color";
import CustomCell from "../../components/CustomCell";
import { useQuery } from "@tanstack/react-query";
import useAxiosInterceptors from "../auth/hooks/useAxiosInterceptor";
import uuid from "react-uuid";

const Contact = () => {
  const theme = useTheme();
  const axiosInterceptor = useAxiosInterceptors();
  const { backgroundColorAction, elementColor, elementColorOnHover } = myColors(
    theme.palette.mode
  );

  const url = "/user/showusers";

  const { data, isError, isFetching } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const res = await axiosInterceptor({
        method: "GET",
        url,
      });
      return res.data;
    },
  });

  if (isError) {
    return <div>Error</div>;
  }

  if (isFetching) {
    return <div>Loading ...</div>;
  }

  const coloums: GridColDef[] = [
    {
      field: "userName",
      headerName: "User Name",
      type: "string",
      flex: 1,
      minWidth: 200,
      renderCell: (params) => (
        <CustomCell title={params.row.userName} myColor={elementColor} />
      ),
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      flex: 1,
      minWidth: 250,
      renderCell: (params) => <CustomCell title={params.row.email} />,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
      minWidth: 200,
      renderCell: (params) => <CustomCell title={params.row.phone} />,
    },
    {
      field: "country",
      headerName: "Country",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => <CustomCell title={params.row.country} />,
    },
  ];

  return (
    <Box>
      <Header
        title="Contact"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        my={5}
        sx={{
          bgcolor: theme.palette.background.paper,
          ".MuiDataGrid-toolbarContainer": {
            padding: 2,
          },
          ".MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.default,
          },
          ".MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.default,
          },
          ".MuiDataGrid-row:hover": {
            backgroundColor: backgroundColorAction,
            color: elementColorOnHover,
          },
          ".MuiButton-textPrimary": {
            color: elementColor,
          },
        }}
      >
        <DataGrid
          columns={coloums}
          rows={data}
          slots={{ toolbar: GridToolbar }}
          getRowId={() => uuid()}
        />
      </Box>
    </Box>
  );
};

export default Contact;
