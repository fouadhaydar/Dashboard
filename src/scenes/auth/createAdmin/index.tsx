import { Box, Button, MenuItem, TextField, useTheme } from "@mui/material";
import { Formik, Form } from "formik";
import { signUpValidation } from "../validation/validationShema";
import PasswordsFields from "../components/PasswordsFields";
import myColors from "../../../components/color";
import { useMutation } from "@tanstack/react-query";
import useAxiosInterceptors from "../hooks/useAxiosInterceptor";
import AlertMessage from "../../../components/AlertMessage";
import { Header } from "../../../components/Header";

interface Data {
  userName: string;
  email: string;
  phoneNumber: string;
  country: string;
  password: string;
  confirmPassword: string;
  address: string;
  city: string;
  zipCode: string;
}

const CreateAdmin = () => {
  const theme = useTheme();
  const axiosInterceptor = useAxiosInterceptors();

  const initialValues: Data = {
    userName: "",
    email: "",
    phoneNumber: "",
    country: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    zipCode: "",
  };
  const helperTextStyle = {
    width: "50%",
    ".MuiFormHelperText-contained": {
      marginY: "12px",
      marginX: 0,
    },
    ".MuiInputBase-input": {
      backgroundColor: theme.palette.background.paper,
    },
  };

  const { isSuccess, isPending, mutate, isError, error } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: async (data: Data) => {
      const { data: res } = await axiosInterceptor({
        url: "/user/createadmin",
        method: "POST",
        withCredentials: true,
        data: {
          userName: data.userName,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          phoneNumber: data.phoneNumber,
          country: data.country,
        },
      });
      return res;
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const handleFormSubmit = async (values: Data) => {
    mutate(values);
  };
  const color = theme.palette.mode === "dark" ? "warning" : "primary";
  const { btnColor, btnTextColor, btnColorHover } = myColors(
    theme.palette.mode
  );

  return (
    <>
      <Box sx={{ height: "100vh" }}>
        <Header title="Create New Admin" />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          marginTop={"40px"}
        >
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Box display={"flex"} flexDirection={"column"}>
              <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                validationSchema={signUpValidation}
              >
                {({ errors, handleChange, handleBlur, values, touched }) => {
                  return (
                    <Form
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        width: "100%",
                      }}
                    >
                      <Box className="create-admin">
                        <TextField
                          required
                          label="User Name"
                          variant="outlined"
                          name="userName"
                          type="text"
                          placeholder="User Name"
                          value={values.userName}
                          error={!!errors.userName && touched.userName}
                          helperText={touched.userName && errors.userName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          sx={{
                            ...helperTextStyle,
                            width: "100%",
                          }}
                          color={color}
                        />
                        <TextField
                          required
                          label="Email"
                          variant="outlined"
                          name="email"
                          type="email"
                          placeholder="first.last@subdomain.example.net"
                          value={values.email}
                          error={!!errors.email && touched.email}
                          helperText={touched.email && errors.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          sx={{
                            ...helperTextStyle,
                            width: "100%",
                          }}
                          color={color}
                        />
                      </Box>
                      <Box className="create-admin">
                        <TextField
                          required
                          label="Phone Number"
                          variant="outlined"
                          name="phoneNumber"
                          type="text"
                          placeholder="Phone Number +44 7777 777 777"
                          value={values.phoneNumber}
                          error={!!errors.phoneNumber && touched.phoneNumber}
                          helperText={touched.phoneNumber && errors.phoneNumber}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          sx={{
                            ...helperTextStyle,
                            width: "100%",
                          }}
                          color={color}
                        />
                        <TextField
                          select
                          label="Country"
                          variant="outlined"
                          name="country"
                          type="text"
                          placeholder="Selecte Your Country"
                          onChange={handleChange}
                          value={values.country}
                          error={!!errors.country && touched.country}
                          helperText={touched.country && errors.country}
                          onBlur={handleBlur}
                          sx={{
                            ...helperTextStyle,
                            width: "100%",
                          }}
                          color={color}
                        >
                          {["Lebanon", "Egypt", "Uk", "US", "UA", "Jorden"].map(
                            (country) => (
                              <MenuItem key={country} value={country}>
                                {country}
                              </MenuItem>
                            )
                          )}
                        </TextField>
                      </Box>
                      <Box className="create-admin">
                        <TextField
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.address}
                          fullWidth
                          name="address"
                          label="Adress"
                          variant="outlined"
                          color={
                            theme.palette.mode === "dark"
                              ? "warning"
                              : "primary"
                          }
                          error={!!errors.address && !!touched.address}
                          helperText={touched.address && errors.address}
                          sx={{
                            flex: 1,
                            ...helperTextStyle,
                            width: "100%",
                          }}
                        />
                        <Box className="create-admin" flex={1}>
                          <TextField
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.city}
                            name="city"
                            label="City"
                            variant="outlined"
                            color={
                              theme.palette.mode === "dark"
                                ? "warning"
                                : "primary"
                            }
                            error={!!errors.city && !!touched.city}
                            helperText={touched.city && errors.city}
                            sx={{
                              ...helperTextStyle,
                              width: "100%",
                            }}
                          />
                          <TextField
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.zipCode}
                            name="zipCode"
                            label="Zipe Code"
                            variant="outlined"
                            color={
                              theme.palette.mode === "dark"
                                ? "warning"
                                : "primary"
                            }
                            error={!!errors.zipCode && !!touched.zipCode}
                            helperText={touched.zipCode && errors.zipCode}
                            sx={{
                              ...helperTextStyle,
                              width: "100%",
                            }}
                          />
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"flex-start"}
                        width={"100%"}
                      >
                        <PasswordsFields
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={{
                            password: values.password,
                            confirmPassword: values.confirmPassword,
                          }}
                          errors={errors}
                          touched={touched}
                        />
                      </Box>
                      <Button
                        disabled={isPending}
                        type="submit"
                        sx={{
                          bgcolor: btnColor,
                          color: btnTextColor,
                          alignSelf: "flex-end",
                          width: "100px",
                          height: "40px",
                          marginBottom: "40px",
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
                        {isPending ? "Pending ... " : "Sign Up"}{" "}
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
              <Box>
                {(isError || isSuccess) && (
                  <AlertMessage
                    message={
                      !isError
                        ? "Admin Was Created Successfuly "
                        : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          //@ts-ignore
                          error.response.data.message
                    }
                    error={isError}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateAdmin;
