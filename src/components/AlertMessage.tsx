import { Alert, Box } from "@mui/material";

const AlertMessage = ({
  message,
  error,
}: {
  message: string;
  error: boolean;
}) => {
  return (
    <Box sx={{ marginBlock: "20px" }}>
      <Alert
        variant="outlined"
        severity={`${error ? "error" : "success"}`}
        sx={{ fontSize: "16px" }}
      >
        {message}
      </Alert>
    </Box>
  );
};

export default AlertMessage;
