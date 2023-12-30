import { Box, InputAdornment, TextField, useTheme } from "@mui/material";
import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent, FocusEvent, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface Passwords {
  password: string;
  confirmPassword: string;
}

interface PasswordsFieldsInterface {
  handleBlur: {
    (e: FocusEvent<unknown, Element>): void;
    <T = unknown>(fieldOrEvent: T): T extends string
      ? (e: unknown) => void
      : void;
  };
  handleChange: {
    (e: ChangeEvent<unknown>): void;
    <T = string | ChangeEvent<unknown>>(
      field: T
    ): T extends ChangeEvent<unknown>
      ? void
      : (e: string | ChangeEvent<unknown>) => void;
  };
  values: Passwords;
  errors: FormikErrors<Passwords>;
  touched: FormikTouched<Passwords>;
  style?: object;
}

const PasswordsFields = ({
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  style,
}: PasswordsFieldsInterface) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const helperTextStyle = {
    ".MuiInputBase-adornedEnd": {
      backgroundColor: theme.palette.background.paper,
    },
    width: "100%",
    ".MuiFormHelperText-contained": {
      marginY: "12px",
      marginX: 0,
    },
  };

  const handlePssword = () => setShowPassword((prev) => !prev);
  return (
    <Box sx={{ ...style }}>
      <TextField
        required
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        label="Password"
        variant="outlined"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        error={!!errors.password && touched.password}
        helperText={
          (touched.password && errors.password) ||
          "Your password must be at least 8 characters"
        }
        name="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {" "}
              {showPassword ? (
                <VisibilityIcon
                  width={20}
                  height={20}
                  onClick={handlePssword}
                  sx={{
                    cursor: "pointer",
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  width={20}
                  height={20}
                  onClick={handlePssword}
                  sx={{
                    cursor: "pointer",
                  }}
                />
              )}
            </InputAdornment>
          ),
        }}
        sx={{
          ...helperTextStyle,
        }}
        color={theme.palette.mode === "dark" ? "warning" : "primary"}
      />
      <TextField
        required
        label="Confirme Password"
        variant="outlined"
        name="confirmPassword"
        type={showPassword ? "text" : "password"}
        placeholder="Confirme Password"
        className="w-full"
        value={values.confirmPassword}
        error={!!errors.confirmPassword && touched.confirmPassword}
        helperText={
          (touched.confirmPassword && errors.confirmPassword) ||
          "confirme password and password should be the same"
        }
        color={theme.palette.mode === "dark" ? "warning" : "primary"}
        onBlur={handleBlur}
        onChange={handleChange}
        sx={{
          ...helperTextStyle,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {" "}
              {showPassword ? (
                <VisibilityIcon
                  width={20}
                  height={20}
                  onClick={handlePssword}
                  sx={{
                    cursor: "pointer",
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  width={20}
                  height={20}
                  onClick={handlePssword}
                  sx={{
                    cursor: "pointer",
                  }}
                />
              )}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default PasswordsFields;
