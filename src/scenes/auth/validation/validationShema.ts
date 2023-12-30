/* eslint-disable no-useless-escape */
import { object, ref, string } from "yup";

const regEmail = /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,}$/;
const regPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,}/;
const regPhoneNumber = /^\+(?:[0-9] ?){6,14}[0-9]$/;

const emailHelperText = "Email should be like first.last@subdomain.example.net";
const passwordHelperText =
  "password must be at least 8 char and contain at least one: lowercase letter uppercase letter number(0-9) Special characte";
const phoneNumberHelperText = "Phone number should be like +44 7777 777 777";

export const signUpValidation = object().shape({
  userName: string().required("User Name Is Required"),
  email: string()
    .email(emailHelperText)
    .matches(regEmail, emailHelperText)
    .required("Please Enter A Valid Email"),

  phoneNumber: string()
    .matches(regPhoneNumber, phoneNumberHelperText)
    .required(phoneNumberHelperText),

  password: string()
    .matches(regPassword, passwordHelperText)
    .required(passwordHelperText),
  country: string().oneOf(["Lebanon", "Egypt", "Uk", "US", "UA", "Jorden"]),

  address: string().required("Street address Is Required"),
  city: string().required("City is required"),
  zipCode: string().required("Zipe Code is Required"),

  confirmPassword: string()
    .oneOf([ref("password")], "Your Confirmation Is Wrong")
    .required("Please Confirm Your Password"),
});

export const logInValidation = object().shape({
  email: string()
    .email(emailHelperText)
    .matches(regEmail, emailHelperText)
    .required("Please Enter A Valid Email"),
  password: string()
    .matches(regPassword, passwordHelperText)
    .required(passwordHelperText),
});

export const resetPasswordValidation = object().shape({
  password: string()
    .matches(regPassword, passwordHelperText)
    .required(passwordHelperText),
  confirmPassword: string()
    .oneOf([ref("password")], "Your Confirmation Is Wrong")
    .required("Please Confirm Your Password"),
});
