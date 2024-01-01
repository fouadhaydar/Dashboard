import { Box, Button, useTheme } from "@mui/material";
import myColors from "./color";
import { GridToolbar } from "@mui/x-data-grid";

const CustomeToolBar = ({
  handleClick,
  title,
}: {
  handleClick: () => void;
  title: string;
}) => {
  const theme = useTheme();
  const { btnColor, btnTextColor, btnColorHover } = myColors(
    theme.palette.mode
  );
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <GridToolbar />
      <Button
        sx={{
          color: `${btnTextColor} !important`,
          bgcolor: btnColor,
          ":hover": {
            backgroundColor: btnColorHover,
          },
          marginRight: "16px",
        }}
        onClick={handleClick}
      >
        {title}
      </Button>
    </Box>
  );
};

export default CustomeToolBar;
