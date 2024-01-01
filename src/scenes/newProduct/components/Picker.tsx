import { Box, TextField, Typography, useTheme } from "@mui/material";
import { useFormikContext } from "formik";
import { HexColorPicker } from "react-colorful";

const Picker = () => {
  const { handleChange, values, setValues } = useFormikContext<{
    product: Product;
    productVariation: ProductVariation;
  }>();
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        flex: 1,
      }}
    >
      <Typography variant="h3">Choose color</Typography>
      <HexColorPicker
        color={values.productVariation.optionsValues["color"]}
        style={{
          width: "100%",
          height: "400px",
        }}
        onChange={(value: string) => {
          setValues((prev) => ({
            ...prev,
            productVariation: {
              ...prev.productVariation,
              optionsValues: {
                ...prev.productVariation.optionsValues,
                color: value,
              },
            },
          }));
        }}
      />
      <TextField
        type="text"
        label="Type your hex color"
        name="productVariation.optionsValues.color"
        required
        variant="outlined"
        value={values.productVariation.optionsValues["color"]}
        onChange={handleChange}
        color={theme.palette.mode === "dark" ? "warning" : "primary"}
      />
    </Box>
  );
};

export default Picker;
