import { Box, Button, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import AddProductForm from "./components/AddProductForm";
import ProductVariant from "./components/ProductVariant";
import { HorizontalStepper } from "./components/HorizontalStepper";
import { useEffect, useState } from "react";
import myColors from "../../components/color";
import { Formik } from "formik";
import { Form, useLocation } from "react-router-dom";
import {
  ProductFormValidation1,
  ProductFormValidation2,
} from "./validation/validation";
import { useMutation } from "@tanstack/react-query";
import useAxiosInterceptors from "../auth/hooks/useAxiosInterceptor";
import { useImage } from "./hooks/useImage";
import AlertMessage from "../../components/AlertMessage";

const AddNewProduct = () => {
  const theme = useTheme();
  const { btnColorHover, btnColor, btnTextColor } = myColors(
    theme.palette.mode
  );

  const [step, setStep] = useState(1);
  const [send, setSend] = useState<undefined | boolean>(undefined);

  const steps = ["General information", "Create variations"];

  const nextStep = () => {
    setStep((prev) => {
      if (prev < steps.length) {
        return prev + 1;
      }
      return prev;
    });
  };

  const prevStep = () => {
    setStep((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  // local component
  const RenderSetp = ({ step }: { step: number }) => {
    switch (step) {
      case 1:
        return <AddProductForm />;
      case 2:
        return <ProductVariant />;
      default:
        return <div>Error</div>;
    }
  };

  const initialValues: {
    product: Product;
    productVariation: ProductVariation;
  } = {
    product: {
      title: "",
      description: "",
      discount: 0,
      imageUrl: "",
      manufacturer: "",
      manufacturerId: 0,
      categoryId: 0,
      category: "",
      specification: "",
      barCode: "",
      productVariantsVMs: [],
    },
    productVariation: {
      qty: 0,
      sku: "",
      price: 0,
      optionsValues: {
        color: "#fff",
        ramStorage: "",
      },
    },
  };
  const axiosInterceptor = useAxiosInterceptors();
  const { imageUrl } = useImage();

  const { state } = useLocation();
  const id = state?.id || undefined;

  const { mutate, isPending } = useMutation({
    mutationKey: ["create-product"],
    mutationFn: async (values: {
      product: Product;
      productVariation: ProductVariation;
    }) => {
      const data = {
        barcode: values.product.barCode,
        title: values.product.title,
        categoryId: values.product.categoryId,
        description: values.product.description,
        discount: values.product.discount,
        imageUrl,
        manufacturerId: values.product.manufacturerId,
        productVariantsVMs: values.product.productVariantsVMs,
        specification: values.product.specification,
      };
      if (id == undefined) {
        const res = await axiosInterceptor({
          url: "/product/createproduct",
          method: "POST",
          withCredentials: true,
          data,
        });
        return res.data;
      } else {
        const res = await axiosInterceptor({
          url: `/product/updateproduct?id=${id}`,
          method: "PATCH",
          withCredentials: true,
          data: {
            id,
            ...data,
          },
        });
        return res.data;
      }
    },
  });

  const handleSubmitFunction = (
    step: number,
    values: { product: Product; productVariation: ProductVariation }
  ) => {
    // e.preventDefault();
    if (step == 1) {
      nextStep();
    } else {
      setSend(true);
      if (values.product.productVariantsVMs.length == 0) {
        setSend(false);
        return;
      }
      mutate(values);
    }
  };
  useEffect(() => {
    if (!send) {
      setTimeout(() => {
        setSend(true);
      }, 2000);
    }
  }, [send]);

  if (isPending) {
    return <div>pending...</div>;
  }

  return (
    <Box>
      <Header title={"Add New Product"} />

      <HorizontalStepper step={step} steps={steps} />
      <Formik
        onSubmit={async (values) => {
          handleSubmitFunction(step, values);
        }}
        initialValues={initialValues}
        validationSchema={() =>
          step == 1 ? ProductFormValidation1 : ProductFormValidation2
        }
      >
        {({ handleSubmit }) => {
          return (
            <Box
              sx={{
                display: "flex",
                gap: "30px",
                marginTop: "40px",
                minHeight: "100vh",
              }}
            >
              <Form
                onSubmit={handleSubmit}
                style={{
                  flex: 1,
                }}
              >
                <RenderSetp step={step} />
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "40px",
                    gap: "20px",
                  }}
                >
                  {step == 2 && (
                    <Button
                      sx={{
                        color: `${btnTextColor} !important`,
                        bgcolor: btnColor,
                        ":hover": {
                          backgroundColor: btnColorHover,
                        },
                        alignSelf: "flex-end",
                        padding: "10px",
                      }}
                      onClick={prevStep}
                    >
                      previous
                    </Button>
                  )}

                  <Button
                    sx={{
                      color: `${btnTextColor} !important`,
                      bgcolor: btnColor,
                      ":hover": {
                        backgroundColor: btnColorHover,
                      },
                      alignSelf: "flex-end",
                      padding: "10px",
                    }}
                    type="submit"
                  >
                    {step == 1
                      ? "Next"
                      : isPending
                      ? "submitting..."
                      : "Submit"}
                  </Button>
                </Box>
              </Form>
            </Box>
          );
        }}
      </Formik>
      {send == false && send != undefined && (
        <AlertMessage
          message={"you should have at leaste one variante"}
          error={true}
        ></AlertMessage>
      )}
    </Box>
  );
};

export default AddNewProduct;
