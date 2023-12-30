import { Form, Formik } from "formik";
import { useState } from "react";
import { logInValidation } from "../validation/validationShema";
import {
  Box,
  Button,
  InputAdornment,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useMutation } from "@tanstack/react-query";
import myColors from "../../../components/color";
import AlertMessage from "../../../components/AlertMessage";
import { useLogIn } from "../../../context/useLogIn";
import { axiosCustom } from "../../../api/axiosCustome";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setLoggedIn } = useLogIn();

  const theme = useTheme();
  const { btnColor, btnTextColor, btnColorHover } = myColors(
    theme.palette.mode
  );

  const { mutate, isError, error, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const { data } = await axiosCustom({
        url: "/user/login",
        method: "POST",
        data: {
          email,
          password,
        },
      });
      return data;
    },
    onSuccess: (data) => {
      setLoggedIn({
        token: data.token,
        role: data.role,
        userName: data.userName,
      });
    },
  });
  const { mutate: resetPassword, isPending: isLoading } = useMutation({
    mutationKey: ["resewtPassword"],
    mutationFn: async ({ email }: { email: string }) => {
      const { data } = await axiosCustom({
        method: "POST",
        url: `/user/forgotpassword?email=${email}`,
      });
      return data;
    },
  });

  const style = {
    ".MuiFormHelperText-contained": {
      marginY: "12px",
      marginX: 0,
      fontSize: "16px",
    },
  };

  const handlePssword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (values: { email: string; password: string }) => {
    mutate({ email: values.email, password: values.password });
  };

  const handleForgetPassword = (email: string) => {
    if (!isLoading) resetPassword({ email });
  };

  return (
    <>
      <Box height={"100vh"} width={"100%"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"100%"}
        >
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Box
              width={"50%"}
              display={"flex"}
              flexDirection={"column"}
              gap={4}
              sx={{
                ".MuiInputBase-input": {
                  fontSize: "16px",
                },
              }}
            >
              <Typography variant="h2">Log In To Your Account</Typography>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={logInValidation}
              >
                {({ handleBlur, handleChange, errors, touched, values }) => {
                  return (
                    <>
                      <Form
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "20px",
                          justifyContent: "center",
                        }}
                      >
                        <TextField
                          required
                          placeholder="first.last@subdomain.example.net"
                          name="email"
                          label="Email"
                          variant="outlined"
                          type="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          error={!!errors.email && touched.email}
                          helperText={touched.email && errors.email}
                          sx={{
                            ...style,
                          }}
                          color={
                            theme.palette.mode === "dark"
                              ? "warning"
                              : "primary"
                          }
                        />
                        <TextField
                          required
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          label="Password"
                          variant="outlined"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          color={
                            theme.palette.mode === "dark"
                              ? "warning"
                              : "primary"
                          }
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
                            ...style,
                          }}
                        />

                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Link
                            onClick={() => handleForgetPassword(values.email)}
                            sx={{
                              color: isLoading ? "lightgray" : btnColor,
                              cursor: "pointer",
                            }}
                          >
                            <Typography variant="h5">
                              Forget Password ?
                            </Typography>
                          </Link>
                          <Button
                            disabled={isPending}
                            type="submit"
                            sx={{
                              bgcolor: btnColor,
                              color: btnTextColor,
                              ":hover": {
                                bgcolor: btnColorHover,
                              },
                              ":disabled": {
                                bgcolor: "darkgray",
                                color: "lightgray",
                              },
                            }}
                          >
                            {" "}
                            {isPending ? "Pending ... " : "Log in"}{" "}
                          </Button>
                        </Box>
                      </Form>
                    </>
                  );
                }}
              </Formik>
              {isError && (
                <AlertMessage
                  error={isError}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  message={error?.response?.data?.message}
                />
              )}{" "}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
