import { ReactNode, createContext, useCallback, useState } from "react";

interface ContextType {
  imageUrl: string;
  putImageUrl: (value: string) => void;
}

export const ImageCtx = createContext<ContextType>({
  imageUrl: "",
  putImageUrl: () => {},
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
