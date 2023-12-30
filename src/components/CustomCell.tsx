import { Typography } from "@mui/material";

const CustomCell = ({
  title,
  myColor,
}: {
  title: string | number;
  myColor?: string;
}) => {
  return (
    <Typography color={myColor} variant="h5">
      {title}
    </Typography>
  );
};
export default CustomCell;
