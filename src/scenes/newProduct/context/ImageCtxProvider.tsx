import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

export const ImageCtx = createContext({
  imageUrl: "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  putImageUrl: (value: string) => {},
});

export const ImageCtxProvider = ({ children }: { children: ReactNode }) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const putImageUrl = useCallback((value: string) => {
    setImageUrl(value);
  }, []);

  return (
    <ImageCtx.Provider value={{ imageUrl, putImageUrl }}>
      {children}
    </ImageCtx.Provider>
  );
};

export const useImage = () => {
  const { imageUrl, putImageUrl } = useContext(ImageCtx);
  console.log(imageUrl);
  return { imageUrl, putImageUrl };
};
