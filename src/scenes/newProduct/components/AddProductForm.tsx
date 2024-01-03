import {
  Box,
  MenuItem,
  TextField,
  TextareaAutosize,
  Typography,
  useTheme,
} from "@mui/material";
// import ImageUpload from "./ImageUpload";
import { useFormikContext } from "formik";
import { useQuery } from "@tanstack/react-query";
import useAxiosInterceptors from "../../auth/hooks/useAxiosInterceptor";
import { ChangeEvent } from "react";
import ImageUpload from "./ImageUpload";

const AddProductForm = () => {
  const theme = useTheme();
  const { handleChange, handleBlur, values, errors, touched, setValues } =
    useFormikContext<{
      product: Product;
      productVariation: ProductVariation;
    }>();

  const helperTextStyle = {
    width: "100%",
    ".MuiFormHelperText-contained": {
      marginY: "12px",
      marginX: 0,
    },
    ".MuiInputBase-input": {
      backgroundColor: theme.palette.background.paper,
    },
  };
  const axiosInterceptor = useAxiosInterceptors();

  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery<{ id: 1; categoryName: "phone"; products: null }[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosInterceptor({
        url: "/category/getallcategory",
        method: "Get",
      });
      return res.data;
    },
    refetchOnReconnect: true,
  });

  const {
    data: companies,
    isLoading: fetching,
    isError: faild,
  } = useQuery<{ id: number; manufacturerName: string; products: Product[] }[]>(
    {
      queryKey: ["company"],
      queryFn: async () => {
        const res = await axiosInterceptor({
          url: "/manufacturer/getallmanufacturer",
          method: "GET",
        });
        return res.data;
      },
    }
  );

  if (isLoading || fetching) {
    return <div>Loading ...</div>;
  } else if (isError || faild) {
    return <div>Error</div>;
  }

  const color = theme.palette.mode === "dark" ? "warning" : "primary";
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          padding: "30px",
          flex: 2,
        }}
        border={`1px solid ${theme.palette.divider}`}
        borderRadius={"7px"}
      >
        <Typography variant="h3">Generale Information</Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
          marginTop={"40px"}
        >
          <Box className="add-product">
            <TextField
              required
              label="Product Title"
              variant="outlined"
              name="product.title"
              type="text"
              placeholder="Product Name"
              value={values.product.title}
              error={!!errors.product?.title && touched.product?.title}
              helperText={touched.product?.title && errors.product?.title}
              onBlur={handleBlur}
              onChange={handleChange}
              sx={{
                ...helperTextStyle,
              }}
              color={color}
            />
            {companies && (
              <TextField
                required
                select
                label="Manufacturer"
                variant="outlined"
                name="product.manufacturer"
                type="text"
                placeholder="Manufacturer"
                value={values.product.manufacturer}
                error={
                  !!errors.product?.manufacturer &&
                  touched.product?.manufacturer
                }
                helperText={
                  touched.product?.manufacturer && errors.product?.manufacturer
                }
                onBlur={handleBlur}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const companyId = companies?.filter(
                    (comp) => comp.manufacturerName == e.target.value
                  )[0].id;

                  setValues((prev) => {
                    return {
                      ...prev,
                      product: {
                        ...prev.product,
                        manufacturerId: companyId ?? 0,
                      },
                    };
                  });
                  handleChange(e);
                }}
                sx={{
                  ...helperTextStyle,
                }}
                color={color}
              >
                {companies.length > 0 &&
                  companies.map((company) => (
                    <MenuItem key={company.id} value={company.manufacturerName}>
                      {company.manufacturerName}
                    </MenuItem>
                  ))}
              </TextField>
            )}
          </Box>
          <Box className="add-product">
            <TextField
              required
              label="Discount"
              variant="outlined"
              name="product.discount"
              type="text"
              placeholder="Discount"
              value={values.product.discount}
              error={!!errors.product?.discount && touched.product?.discount}
              helperText={touched.product?.discount && errors.product?.discount}
              onBlur={handleBlur}
              onChange={handleChange}
              sx={{
                ...helperTextStyle,
              }}
              color={color}
            />
            {categories && (
              <TextField
                required
                select
                label="Category"
                variant="outlined"
                name="product.category"
                type="text"
                placeholder="Select Category"
                value={values.product.category}
                error={!!errors.product?.category && touched.product?.category}
                helperText={
                  touched.product?.category && errors.product?.category
                }
                onBlur={handleBlur}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const catId = categories?.filter(
                    (cat) => cat.categoryName == e.target.value
                  )[0].id;

                  setValues((prev) => {
                    return {
                      ...prev,
                      product: {
                        ...prev.product,
                        categoryId: catId ?? 0,
                      },
                    };
                  });
                  handleChange(e);
                }}
                sx={{
                  ...helperTextStyle,
                }}
                color={color}
              >
                {categories.length > 0 &&
                  categories.map((option) => (
                    <MenuItem key={option.id} value={option.categoryName}>
                      {option.categoryName}
                    </MenuItem>
                  ))}
              </TextField>
            )}
            <TextField
              required
              label="Bar Code"
              variant="outlined"
              name="product.barCode"
              type="text"
              placeholder="Bar Code"
              value={values.product.barCode}
              error={!!errors.product?.barCode && touched.product?.barCode}
              helperText={touched.product?.barCode && errors.product?.barCode}
              onBlur={handleBlur}
              onChange={handleChange}
              sx={{
                ...helperTextStyle,
              }}
              color={color}
            />
          </Box>
          <Box className="add-product" width={"100%"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"5px"}
              flex={1}
              minHeight={"200px"}
            >
              <TextareaAutosize
                required
                name="product.description"
                placeholder="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.product.description}
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: "5px",
                  border: `2px solid ${theme.palette.divider}`,
                  color: "white",
                  outline: "none",
                }}
                color={color}
              />
              {!!errors.product?.description &&
                touched.product?.description && (
                  <Typography color={"#f44336"} sx={{ fontSize: "12px" }}>
                    {errors.product?.description}
                  </Typography>
                )}
            </Box>
            <ImageUpload />
          </Box>

          <TextareaAutosize
            required
            name="product.specification"
            placeholder="Specification"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.product.specification}
            style={{
              padding: "12px",
              backgroundColor: theme.palette.background.paper,
              borderRadius: "5px",
              border: `2px solid ${theme.palette.divider}`,
              color: "white",
              outline: "none",
              minHeight: "200px",
            }}
            color={color}
          />
          {!!errors.product?.specification &&
            touched.product?.specification && (
              <Typography color={"#f44336"} sx={{ fontSize: "12px" }}>
                {errors.product?.specification}
              </Typography>
            )}
        </Box>
      </Box>
    </Box>
  );
};

export default AddProductForm;
