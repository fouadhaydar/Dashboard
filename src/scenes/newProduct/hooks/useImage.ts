import { useContext } from "react";
import { ImageCtx } from "../context/ImageCtxProvider";

export const useImage = () => {
  const { imageUrl, putImageUrl } = useContext(ImageCtx);
  return { imageUrl, putImageUrl };
};
