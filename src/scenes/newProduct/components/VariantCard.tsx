import { Box, IconButton, Typography, useTheme } from "@mui/material";
import DataCard from "./DataCard";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormikContext } from "formik";

const VariantCard = ({
  // ram,
  // storage,
  price,
  qty,
  sku,
  color,
  number,
  ramStorage,
}: {
  // ram: string;
  ramStorage: string;
  color: string;
  // storage: string;
  price: number;
  qty: number;
  sku: string;
  number: number;
}) => {
  const theme = useTheme();
  const { setValues } = useFormikContext<{
    product: Product;
    productVariation: ProductVariation;
  }>();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        padding: "20px",
        borderRadius: "7px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
      border={`1px solid ${theme.palette.divider}`}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "10px",
        }}
        borderBottom={`1px solid ${theme.palette.divider}`}
      >
        <Typography variant="h3">Variant {number}</Typography>
        <IconButton
          onClick={() => {
            setValues((prev) => {
              return {
                ...prev,
                product: {
                  ...prev.product,
                  productVariantsVMs: prev.product.productVariantsVMs.filter(
                    (ele, i) => i !== number - 1
                  ),
                },
              };
            });
          }}
        >
          <DeleteIcon color="error" />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: "15px",
        }}
      >
        <DataCard
          title={"Ram / Storage"}
          data={<Typography>{ramStorage} GB</Typography>}
        />
        <DataCard
          title={"Colors"}
          data={
            <Box
              sx={{
                background: color,
                width: "20px",
                height: "20px",
                borderRadius: "100%",
              }}
              border={"1px solid white"}
            />
          }
        />
        <DataCard
          title={"Price"}
          data={<Typography variant="h5">$ {price}</Typography>}
        />
        <DataCard
          title={"Sku"}
          data={<Typography variant="h5">{sku}</Typography>}
        />
        <DataCard
          title={"Quantity"}
          data={<Typography variant="h5">{qty}</Typography>}
        />
      </Box>
    </Box>
  );
};

export default VariantCard;
