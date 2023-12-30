import { Box, IconButton, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import myColors from "../../components/color";
import CustomCell from "../../components/CustomCell";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosInterceptors from "../auth/hooks/useAxiosInterceptor";
import CustomeToolBar from "../../components/CustomeToolBar";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";

const Products = () => {
  const theme = useTheme();
  const axiosInterceptor = useAxiosInterceptors();

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosInterceptor({
        method: "GET",
        url: "/product/getallproducts",
      });
      return res.data;
    },
  });

  const navigate = useNavigate();

  const { backgroundColorAction, elementColor, elementColorOnHover } = myColors(
    theme.palette.mode
  );

  const { mutate } = useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: async (id: string) => {
      const { data } = await axiosInterceptor({
        method: "DELETE",
        url: `/product/deleteproduct?Id=${id}`,
      });
      return data;
    },
    onSuccess: () => {
      refetch();
    },
    onError: () => {
      console.log("error");
    },
  });

  const handleDelete = (id: string) => {
    mutate(id);
  };

  const handleEdit = (id: string) => {
    navigate("/add-new-product", { state: { id } });
  };

  const colums: GridColDef[] = [
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-contact",
      renderCell: (params) => (
        <CustomCell title={params.row.title} myColor={elementColor} />
      ),
    },
    {
      field: "discount",
      flex: 1,
      headerName: "Discount",
      renderCell: (params) => <CustomCell title={`${params.row.discount} %`} />,
    },
    {
      field: "manufacturerName",
      flex: 1,
      headerName: "Manufacturer",
      renderCell: (params) => (
        <CustomCell title={params.row.manufacturerName} />
      ),
    },
    {
      field: "categoryName",
      flex: 1,
      headerName: "Category",
      renderCell: (params) => <CustomCell title={params.row.categoryName} />,
    },
    {
      field: "addedDate",
      flex: 2,
      headerName: "Date Of Creation",
      renderCell: (params) => {
        const dateObj = new Date(params.row.addedDate);
        const readableDate = dateObj.toLocaleString("en-US", {
          timeZone: "UTC",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        });
        return <CustomCell title={readableDate} />;
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      renderCell: (params) => (
        <IconButton onClick={() => handleEdit(params.row.id)}>
          <Edit />
        </IconButton>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      renderCell: (params) => (
        <IconButton onClick={() => handleDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  if (isError) {
    return <div>Error</div>;
  }

  if (isFetching) {
    return <div>Loading ...</div>;
  }

  return (
    <Box>
      <Header title="Products" />
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
          ".MuiDataGrid-row.Mui-selected": {
            backgroundColor: backgroundColorAction,
            color: elementColorOnHover,
          },
          ".MuiCheckbox-root": {
            color: `${elementColor} !important`,
          },
        }}
      >
        <DataGrid
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[10, 20, 50, 100]}
          columns={colums}
          rows={data}
          checkboxSelection={true}
          slots={{
            toolbar: () =>
              CustomeToolBar({
                handleClick: () => navigate("/add-new-product"),
              }),
          }}
          density="comfortable"
        />
      </Box>
    </Box>
  );
};

export default Products;
