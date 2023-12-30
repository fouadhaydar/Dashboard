import { Box, Typography, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import myColors from "../../components/color";
import CustomCell from "../../components/CustomCell";
import { tokens } from "../../Theme/constance";
import { useQuery } from "@tanstack/react-query";
import useAxiosInterceptors from "../auth/hooks/useAxiosInterceptor";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { backgroundColorAction, elementColorOnHover, elementColor } = myColors(
    theme.palette.mode
  );

  const axiosInterceptor = useAxiosInterceptors();

  const { data, isError, isFetching } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const res = await axiosInterceptor({
        method: "GET",
        url: "/user/showcrew",
      });
      return res.data;
    },
  });

  if (isFetching) {
    return <div>Fetching...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const coloums: GridColDef[] = [
    // {
    //   field: "id",
    //   headerName: "ID",
    //   renderCell: () => <CustomCell title={uuid()} />,
    // },
    {
      field: "userName",
      headerName: "User Name",
      flex: 1,
      renderCell: (params) => (
        <CustomCell title={params.row.userName} myColor={elementColor} />
      ),
    },
    {
      field: "country",
      headerName: "Country",
      type: "string",
      renderCell: (params) => <CustomCell title={params.row.country} />,
    },
    {
      field: "city",
      headerName: "City",
      type: "string",
      renderCell: (params) => <CustomCell title={params.row.city} />,
    },
    {
      field: "address",
      headerName: "Address",
      type: "string",
      renderCell: (params) => <CustomCell title={params.row.address} />,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      type: "string",
      renderCell: (params) => <CustomCell title={params.row.zipCode} />,
    },
    {
      field: "phoneNumber",
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
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:
                role === "admin"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[800],
              minwidth: "100px",
              width: "100%",
              padding: "7px",
              borderRadius: "7px",
              gap: "4px",
              cursor: "pointer",
            }}
          >
            {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {role === "owner" && <SecurityOutlinedIcon />}
            <Typography>{role}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Header title="Team" subtitle="Managing the Team Members" />
      <Box
        my={5}
        sx={{
          bgcolor: theme.palette.background.paper,
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
          ".MuiDataGrid-row.Mui-selected": {
            backgroundColor: backgroundColorAction,
            color: elementColorOnHover,
          },
          ".MuiButton-text": {
            color:
              theme.palette.mode == "dark"
                ? colors.greenAccent[500]
                : colors.greenAccent[300],
          },
        }}
      >
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          columns={coloums}
          rows={data}
          checkboxSelection={true}
        />
      </Box>
    </Box>
  );
};

export default Team;
