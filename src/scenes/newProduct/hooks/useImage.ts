import { useContext } from "react";
import { ImageCtx } from "../context/ImageCtxProvider";

export const useImage = () => {
  const { imageUrl, putImageUrl } = useContext(ImageCtx);
  console.log(imageUrl);
  return { imageUrl, putImageUrl };
};
