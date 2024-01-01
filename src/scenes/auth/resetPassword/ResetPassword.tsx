"use client";
import { Box, Button, useTheme } from "@mui/material";
import { Form, Formik } from "formik";
import { resetPasswordValidation } from "../validation/validationShema";
import myColors from "../../../components/color";
import { useMutation } from "@tanstack/react-query";
import AlertMessage from "../../../components/AlertMessage";
import { useLocation } from "react-router-dom";
import PasswordsFields from "../components/PasswordsFields";
import { axiosCustom } from "../../../api/axiosCustome";

const ResetPassword = () => {
  const theme = useTheme();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const uid = queryParams.get("uid");
  const token = queryParams.get("token")?.replaceAll(" ", "+");

  const { btnColor, btnTextColor, btnColorHover } = myColors(
    theme.palette.mode
  );

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  // const helperTextStyle = {
  //   ".MuiFormHelperText-contained": {
  //     marginY: "12px",
  //     marginX: 0,
  //   },
  // };

  const { data, mutate, isError, isSuccess, error, isPending } = useMutation({
    mutationFn: async ({ password }: { password: string }) => {
      const { data } = await axiosCustom({
        method: "POST",
        url: "/user/resetpassword",
        data: {
          userId: uid,
          token: token,
          newPassword: password,
        },
      });
      return data;
    },
  });
  const handleSubmit = async (values: { password: string }) => {
    if (!isPending) mutate({ password: values.password });
  };

  return (
    <Box
      className="container min-h-[100vh] flex flex-col justify-center"
      height={"100vh"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"30px"}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={resetPasswordValidation}
      >
        {({
          handleBlur,
          handleChange,
          errors,
          touched,
          values,
          isSubmitting,
        }) => {
          return (
            <>
              <Form
                className="form-parent"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {/* <TextField
                  required
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  variant="outlined"
                  onBlur={handleBlur}
                  className="w-full"
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
                />
                <TextField
                  required
                  label="Confirme Password"
                  variant="outlined"
                  name="confirmePassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirme Password"
                  className="w-full"
                  value={values.confirmePassword}
                  error={!!errors.confirmePassword && touched.confirmePassword}
                  helperText={
                    (touched.confirmePassword && errors.confirmePassword) ||
                    "confirme password and password should be the same"
                  }
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
                /> */}
                <PasswordsFields
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  touched={touched}
                />
                <Button
                  type="submit"
                  disabled={isPending}
                  sx={{
                    bgcolor: btnColor,
                    color: btnTextColor,
                    alignSelf: "flex-end",
                    minWidth: "100px",
                    minHeight: "40px",
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
                  {isSubmitting ? "Pending ... " : "Reset password"}{" "}
                </Button>
              </Form>
            </>
          );
        }}
      </Formik>
      <Box width={"60%"} marginLeft={"auto"} marginRight={"auto"}>
        {isError && (
          <AlertMessage
            error={isError}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            message={error?.response?.data.message}
          />
        )}{" "}
        {isSuccess && <AlertMessage error={isError} message={data.message} />}
      </Box>
    </Box>
  );
};

export default ResetPassword;
