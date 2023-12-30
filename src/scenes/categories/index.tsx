import { Box, IconButton, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import myColors from "../../components/color";
import CustomCell from "../../components/CustomCell";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CustomeToolBar from "../../components/CustomeToolBar";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosInterceptors from "../auth/hooks/useAxiosInterceptor";
import { useState } from "react";
// import CustomDotsCell from "./CustomeEditAndDelete";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CustomeModalAddCat from "./CustomeModalAddCat";
import useData from "./useData";
import { useMutation } from "@tanstack/react-query";
import useAxiosInterceptors from "../auth/hooks/useAxiosInterceptor";
import AlertMessage from "../../components/AlertMessage";
import { deleteObject, getStorage, ref } from "firebase/storage";

const Categories = () => {
  const theme = useTheme();
  const { backgroundColorAction, elementColor, elementColorOnHover } = myColors(
    theme.palette.mode
  );
  const axiosInterceptor = useAxiosInterceptors();
  const [open, setOpen] = useState(false);
  const { categories, isLoading, fetchingError, refetch } = useData({});

  const { mutate, isError, error } = useMutation({
    mutationKey: ["deleteCategory"],
    mutationFn: async (id: string) => {
      // get the image url form data fetched form to delete it in firebase
      const targetCat = categories?.filter((cat) => cat.id === +id);
      if (targetCat) {
        const storage = getStorage();
        const imageRef = ref(storage, targetCat[0].imgeUrl);
        // fierbase delete fuction
        await deleteObject(imageRef);
        // if image deleted succefully then i will delete cat obj form backend
        const { data } = await axiosInterceptor({
          method: "DELETE",
          url: `/category/deletecategory?id=${id}`,
        });
        return data;
      }
    },
    onSuccess: () => {
      refetch();
    },
    // onError: (error) => {
    //   // console.log(error, "Error");
    // },
  });

  const colums: GridColDef[] = [
    // TODO: image for each category
    {
      field: "id",
      headerName: "ID",
      renderCell: (params) => <CustomCell title={params.row.id} />,
    },
    {
      field: "imgeUrl",
      headerName: "Image",
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "content",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "4px",
            width: "60px",
            height: "60px",
          }}
        >
          {/* <Box
            
          > */}
          <img
            src={params.row.imgeUrl}
            alt="cat"
            width={"50px"}
            height={"50px"}
          />
          {/* </Box> */}
        </Box>
      ),
    },
    {
      field: "categoryName",
      headerName: "Category Name",
      flex: 1,
      renderCell: (params) => (
        <CustomCell title={params.row.categoryName} myColor={elementColor} />
      ),
    },
    {
      field: "productsNumber",
      headerName: "Product's Number",
      flex: 1,
      renderCell: (params) => (
        <CustomCell title={params.row.productsNumber} myColor={elementColor} />
      ),
    },
    {
      field: "CategoryMarketShare",
      headerName: "Category Market Share",
      flex: 1,
      renderCell: (params) => (
        <CustomCell
          title={params.row.CategoryMarketShare}
          myColor={elementColor}
        />
      ),
    },
    {
      field: "edit",
      // flex: 1,
      headerName: "Edit",
      renderCell: () => {
        // return <CustomDotsCell />;
        return (
          <IconButton>
            <EditIcon />
          </IconButton>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      renderCell: (params) => {
        // return <CustomDotsCell />;
        return (
          <IconButton onClick={() => mutate(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];
  if (isLoading) {
    return <Box>Loading...</Box>;
  }
  if (fetchingError) {
    return <Box>Error</Box>;
  }
  return (
    <Box>
      <Header title={"Add New Category"} />
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
          ".MuiDataGrid-toolbarContainer": {
            padding: 2,
          },
          ".MuiDataGrid-row:hover": {
            backgroundColor: backgroundColorAction,
            color: elementColorOnHover,
          },
          ".MuiButton-textPrimary": {
            color: elementColor,
          },
          ".MuiCheckbox-root": {
            color: `${elementColor} !important`,
          },
        }}
      >
        <DataGrid
          columns={colums}
          rowHeight={90}
          rows={categories ?? []}
          slots={{
            toolbar: () => CustomeToolBar({ handleClick: () => setOpen(true) }),
          }}
        />
      </Box>
      <CustomeModalAddCat
        handleClose={() => setOpen(false)}
        handleAdd={() => {}}
        open={open}
      />
      {isError && <AlertMessage message={error.message} error={isError} />}
    </Box>
  );
};
export default Categories;
