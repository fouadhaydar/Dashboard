import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import { useFormikContext } from "formik";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  // listAll,
  // list,
  // connectStorageEmulator,
} from "firebase/storage";
import uuid from "react-uuid";
import { storage } from "../../../../firebase/firebase";
import { useImage } from "../context/ImageCtxProvider";

const ImageUpload = () => {
  // const [imageUrl, setImageUrl] = useState<string | null>(null);

  const { values, errors, touched, setValues } = useFormikContext<{
    product: Product;
    productVariant: ProductVariation;
  }>();
  const { putImageUrl } = useImage();

  const ALLOWED_FILE_TYPES = ["image/png", "image/jpeg"];

  function validateFileType(file: File) {
    return ALLOWED_FILE_TYPES.includes(file.type);
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    try {
      if (event.target.files && event.target.files[0]) {
        const valid = validateFileType(event.target.files[0]);

        if (!valid) {
          console.log("invalid type");
          return;
        }

        const file = event.target.files[0];

        // upload image to firebase
        const imageRef = ref(storage, `products/${file.name + uuid()}`);
        uploadBytes(imageRef, file)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref)
              .then((url) => {
                // console.log(url);
                putImageUrl(url);
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
        fr.readAsDataURL(file);
        fr.onload = () => {
          if (fr.readyState === fr.DONE) {
            const res = fr.result;
            console.log(typeof res);
            setValues((prev) => {
              return {
                ...prev,
                product: {
                  ...prev.product,
                  imageUrl: typeof res === "string" ? res : "string",
                },
              };
            });
            // if (typeof res === "string") setFieldValue("imageUrl", res);
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        flex: 1,
      }}
    >
      {/* <Typography variant="h3">Upload Product Image</Typography> */}
      <Box
        sx={{
          display: "flex",
          gap: "25px",
          flex: 1,
        }}
      >
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
            onChange={handleFileChange}
            style={{
              display: "none",
            }}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              accept: [".png", ".jpg"],
            }}
            error={!!errors?.product?.imageUrl && touched.product?.barCode}
            helperText={touched.product?.barCode && errors.product?.barCode}
            id="btn-image"
          />
          <label
            htmlFor="btn-image"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "4px",
              border: "1px dashed white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            {values.product.imageUrl.length > 0 ? (
              <img
                src={values.product.imageUrl}
                alt="image"
                style={{ maxWidth: "100%" }}
              />
            ) : (
              "Upload New Image"
            )}
          </label>
          {!!errors.product?.imageUrl && touched.product?.imageUrl && (
            <Typography color={"#f44336"} sx={{ fontSize: "12px" }}>
              {errors.product?.imageUrl}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ImageUpload;
