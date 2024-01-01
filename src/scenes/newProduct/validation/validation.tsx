import { array, number, object, string } from "yup";

// export const ProductFormValidation = [
//   object().shape({
//     title: string(),
//     description: string(),
//     discount: number(),
//     imageUrl: string(),
//     manufacturer: string(),
//     // manufacturerId: number(),
//     // categoryId: number(),
//     category: string(),
//     specification: string(),
//     barCode: string(),
//     productVariantsVMs: array(),
//   }),
//   object().shape({
//     // id: string(),
//     price: number(),
//     qty: number(),
//     sku: string(),
//     optionsValues: object().shape({
//       color: string(),
//       ram: string(),
//       storage: string(),
//     }),
//   }),
// ];
// export const ProductFormValidation = object().shape({
//   product: object().shape({
//     title: string().required("Title is required"),
//     description: string().required("Description is required"),
//     discount: number().required("Discount Should be a number"),
//     imageUrl: string().required("Image is required"),
//     manufacturer: string().required("Manufacturer is required"),
//     // manufacturerId: number(),
//     // categoryId: number(),
//     category: string().required("Category is required"),
//     specification: string().required("Specification is required"),
//     barCode: string().required("Bar Code is required"),
//     productVariantsVMs: array(),
//   }),
//   productVariation: object().shape({
//     // id: string(),
//     price: number().required("Price is required"),
//     qty: number().required("Quantity is required"),
//     sku: string().required("Sku is required"),
//     optionsValues: object().shape({
//       color: string().required("Color is required"),
//       ram: string().required("Ram is required"),
//       storage: string().required("Storage is required"),
//     }),
//   }),
// });

export const ProductFormValidation1 = object().shape({
  product: object().shape({
    title: string().required("Title is required"),
    description: string().required("Description is required"),
    discount: number().required("Discount Should be a number"),
    imageUrl: string().required("Image is required"),
    manufacturer: string().required("Manufacturer is required"),
    category: string().required("Category is required"),
    specification: string().required("Specification is required"),
    barCode: string().required("Bar Code is required"),
    productVariantsVMs: array(),
  }),
});
const regexPattern = /^(\d+)\s*\/\s*(\d+)$/;

export const ProductFormValidation2 = object().shape({
  productVariation: object().shape({
    price: number().required("Price is required"),
    qty: number().required("Quantity is required"),
    sku: string().required("Sku is required"),
    optionsValues: object().shape({
      color: string().required("Color is required"),
      ramStorage: string()
        .matches(regexPattern, "it should be like 12 / 250")
        .required("Ram and Storage is required"),
    }),
  }),
});
// productName: string().required("Product name is required"),
// manufacturer: string().required("Manufacturer is required"),
// discount: number().required("Discount is required"),
// category: string().required("Category is required"),
// barCode: string().required("Bar Code is required"),
// description: string().required("Description is required"),
// specification: string().required("Specification is required")
// });

// export const OptionShema = object().shape({
//   ram: string(),
//   storage: string(),
//   quantiy: number(),
// });
