import { Box, useTheme } from "@mui/material";
import Options from "./Options";
import Picker from "./Picker";
import VariantCard from "./VariantCard";
import { useFormikContext } from "formik";

const ProductVariant = () => {
  const theme = useTheme();
  const { values } = useFormikContext<{
    product: Product;
    productVariation: ProductVariation;
  }>();
  return (
    <Box className="product-variant">
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
        border={`1px solid ${theme.palette.divider}`}
        borderRadius={"7px"}
      >
        <Picker />
        <Box
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: theme.palette.divider,
          }}
        />
        <Options />
      </Box>
      <Box className="options">
        {values.product.productVariantsVMs.map((ele, i) => (
          <VariantCard
            key={ele.sku}
            number={i + 1}
            color={ele.optionsValues["color"]}
            ramStorage={ele.optionsValues["ramStorage"]}
            price={ele.price}
            qty={ele.qty}
            sku={ele.sku}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductVariant;
