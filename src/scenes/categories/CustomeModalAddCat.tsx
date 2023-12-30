import {
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Form, Formik } from "formik";
import myColors from "../../components/color";
import { tokens } from "../../Theme/constance";
import { ChangeEvent, SetStateAction, useState } from "react";
import useData from "./useData";
import * as Yup from "yup";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  // listAll,
  // list,
  // connectStorageEmulator,
} from "firebase/storage";
import uuid from "react-uuid";

import { storage } from "../../../firebase/firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  p: 4,
};

interface DataModale {
  handleClose: () => void;
  handleAdd: () => void;
  open: boolean;
}

const CustomeModalAddCat = ({ handleClose, open }: DataModale) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { btnColor, btnColorHover, btnTextColor } = myColors(
    theme.palette.mode
  );
  // const axiosInterceptor = useAxiosInterceptors();

  // const { mutate, isError, isPending } = useMutation({
  //   mutationKey: ["addNewCategory"],
  //   mutationFn: async (categoryName: string) => {
  //     // console.log("name", categoryName);
  //     const { data } = await axiosInterceptor({
  //       url: "/category/addcategory",
  //       method: "POST",
  //       withCredentials: true,
  //       data: {
  //         categoryName,
  //       },
  //     });
  //     return data;
  //   },
  //   onSuccess: () => {
  //     console.log("success");
  //   },
  //   onError: () => {
  //     console.log("error");
  //   },
  // });
  const { pendingMutation, muationError, mutate } = useData({ handleClose });

  if (pendingMutation) {
    return <Box>Pending ...</Box>;
  }

  if (muationError) {
    return <Box>error</Box>;
  }

  const ALLOWED_FILE_TYPES = ["image/png", "image/jpeg"];

  function validateFileType(file: File) {
    return ALLOWED_FILE_TYPES.includes(file.type);
  }

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    setValues: (
      values: SetStateAction<{ categoryName: string; imageUrl: string }>
    ) => void,
    setFieldValue: (name: string, newValue: string) => void
  ) => {
    event.preventDefault();
    try {
      if (event.target.files && event.target.files[0]) {
        const valid = validateFileType(event.target.files[0]);

        if (!valid) {
          console.log("invalid type");
          return;
        }

        const file = event.target.files[0];
        // upload image to fierbase storage
        const imageRef = ref(storage, `categories/${file.name + uuid()}`);
        uploadBytes(imageRef, file)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref)
              .then((url) => {
                // console.log(url);
                setImageUrl(url);
              })
              .catch((error) => {
                // Handle download error
                console.error("Error getting download URL:", error);
              });
          })
          .catch((error) => {
            // Handle upload error
            console.error("Error uploading image:", error);
          });

        const fr = new FileReader();

        // console.log(file);
        // setImageName(file.name)
        fr.readAsDataURL(file);
        fr.onload = () => {
          if (fr.readyState === fr.DONE) {
            const res = fr.result;
            setValues((prev) => {
              return {
                ...prev,
                imageUrl: typeof res === "string" ? res : "string",
              };
            });
            if (typeof res === "string") setFieldValue("imageUrl", res);
          }
        };
        fr.onerror = (error) => {
          console.error("Error reading file:", error);
        };
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={style}
          display={"flex"}
          justifyContent={"space-around"}
          flexDirection={"column"}
          gap={"30px"}
          bgcolor={theme.palette.background.paper}
          border={`1px solid ${theme.palette.divider}`}
          borderRadius={"6px"}
        >
          <Typography id="transition-modal-title" variant="h4" component="h2">
            Text in a modal
          </Typography>
          <Box
            sx={{
              ".MuiButtonBase-root": {
                mx: 0,
                py: 1,
              },
              ".MuiButtonBase-root:hover": {
                background: btnColorHover,
              },
            }}
          >
            <Typography id="transition-modal-description" variant="h6" py={2}>
              Please enter a new category
            </Typography>
            <Formik
              initialValues={{ categoryName: "", imageUrl: "" }}
              onSubmit={(values) => {
                mutate({ categoryName: values.categoryName, imageUrl });
              }}
              // TODO:

              validationSchema={Yup.object({
                categoryName: Yup.string().required(
                  "Category Name is required"
                ),
                imageUrl: Yup.string().required("Image is required"),
              })}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setValues,
                setFieldValue,
              }) => {
                return (
                  <Form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <TextField
                      fullWidth
                      placeholder="Please enter new catgeory title"
                      color="secondary"
                      name="categoryName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.categoryName}
                      error={touched.categoryName && !!errors.categoryName}
                      helperText={
                        !!touched.categoryName &&
                        !!errors.categoryName &&
                        "the field is empty please enter new title"
                      }
                      margin="normal"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        gap: "20px",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <TextField
                        type="file"
                        required
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                          handleFileChange(event, setValues, setFieldValue)
                        }
                        style={{
                          display: "none",
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          accept: ALLOWED_FILE_TYPES,
                        }}
                        id="btn-image"
                      />
                      <label
                        htmlFor="btn-image"
                        style={{
                          height: "80px",
                          width: "100%",
                          borderRadius: "4px",
                          border: `1px dashed ${
                            errors.imageUrl ? "red" : "white"
                          }`,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                          overflowY: "hidden",
                        }}
                      >
                        {values.imageUrl.length > 0 ? (
                          <img
                            src={values.imageUrl}
                            alt="image"
                            style={{ maxWidth: "100%" }}
                          />
                        ) : (
                          "Upload New Image"
                        )}
                      </label>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"10px"}
                    >
                      <Button
                        type="submit"
                        sx={{
                          backgroundColor: btnColor,
                          color: btnTextColor,
                          mt: 2,
                          flex: 1,
                        }}
                        variant="contained"
                      >
                        {" "}
                        Add
                      </Button>
                      <Button
                        sx={{
                          backgroundColor:
                            theme.palette.mode === "light"
                              ? colors.grey[300]
                              : colors.grey[100],
                          color: btnTextColor,
                          mt: 2,
                          flex: 1,
                        }}
                        onClick={() => handleClose()}
                        variant="contained"
                      >
                        {" "}
                        Close
                      </Button>
                    </Box>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomeModalAddCat;
