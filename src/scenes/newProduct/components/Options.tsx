import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useFormikContext } from "formik";
import myColors from "../../../components/color";

const Options = () => {
  const theme = useTheme();
  const { btnColor, btnTextColor, btnColorHover } = myColors(
    theme.palette.mode
  );
  const color = theme.palette.mode === "dark" ? "warning" : "primary";

  const { handleChange, handleBlur, values, errors, touched, setValues } =
    useFormikContext<{
      product: Product;
      productVariation: ProductVariation;
    }>();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setValues((prev) => {
      prev.product.productVariantsVMs.push(prev.productVariation);
      return prev;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        height: "100%",
        marginTop: "20px",
      }}
    >
      <Typography variant="h3"> Fill it With the variant you want </Typography>
      <Box sx={{ width: "100%", display: "flex", gap: "25px" }}>
        <TextField
          required
          label="Ram / Storage"
          variant="outlined"
          name="productVariation.optionsValues.ramStorage"
          type="text"
          placeholder="Ram / Storage"
          onBlur={handleBlur}
          onChange={handleChange}
          sx={{ flex: 1 }}
          value={values.productVariation.optionsValues["ramStorage"]}
          error={
            !!errors.productVariation?.optionsValues?.ramStorage &&
            touched.productVariation?.optionsValues?.ramStorage
          }
          helperText={
            touched.productVariation?.optionsValues?.ramStorage &&
            errors.productVariation?.optionsValues?.ramStorage
          }
          color={color}
        />
        {/* <TextField
          required
          label="Storage"
          variant="outlined"
          name="productVariation.optionsValues.storage"
          type="text"
          placeholder="Storage"
          onBlur={handleBlur}
          onChange={handleChange}
          sx={{ flex: 1 }}
          value={values.productVariation.optionsValues["storage"]}
          error={
            !!errors.productVariation?.optionsValues?.storage &&
            touched.productVariation?.optionsValues?.storage
          }
          helperText={
            touched.productVariation?.optionsValues?.storage &&
            errors.productVariation?.optionsValues?.storage
          }
          color={color}
        /> */}
      </Box>
      <Box sx={{ width: "100%", display: "flex", gap: "25px" }}>
        <TextField
          required
          label="Price"
          variant="outlined"
          name="productVariation.price"
          type="text"
          placeholder="price"
          onBlur={handleBlur}
          onChange={handleChange}
          sx={{ flex: 1 }}
          value={values.productVariation.price}
          error={
            !!errors.productVariation?.price && touched.productVariation?.price
          }
          helperText={
            touched.productVariation?.price && errors.productVariation?.price
          }
          color={color}
        />
        <TextField
          required
          label="Quantity"
          variant="outlined"
          name="productVariation.qty"
          type="text"
          placeholder="Quantity"
          onBlur={handleBlur}
          onChange={handleChange}
          sx={{ flex: 1 }}
          value={values.productVariation.qty}
          error={
            !!errors.productVariation?.qty && touched.productVariation?.qty
          }
          helperText={
            touched.productVariation?.qty && errors.productVariation?.qty
          }
          color={color}
        />
      </Box>
      <TextField
        required
        label="Sku"
        variant="outlined"
        name="productVariation.sku"
        type="text"
        placeholder="Sku"
        onBlur={handleBlur}
        onChange={handleChange}
        sx={{ flex: 1 }}
        value={values.productVariation.sku}
        error={!!errors.productVariation?.sku && touched.productVariation?.sku}
        helperText={
          touched.productVariation?.sku && errors.productVariation?.sku
        }
        color={color}
      />
      <Button
        sx={{
          color: `${btnTextColor} !important`,
          bgcolor: btnColor,
          ":hover": {
            backgroundColor: btnColorHover,
          },
          padding: "10px",
        }}
        type="submit"
        onClick={(e) => handleClick(e)}
      >
        Add New Variant
      </Button>
    </Box>
  );
};

export default Options;
