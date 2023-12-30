import { ReactNode, createContext } from "react";
import { Theme, ThemeProvider } from "@mui/material/styles";
import { ColorModeContextType } from "../type";
import { useMode } from "./cunstomeHooks";

export const ColorModeCtx = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
});

export const ColorCtxprovider = ({ children }: { children: ReactNode }) => {
  const [theme, colorMode] = useMode() as unknown as [
    Theme,
    ColorModeContextType
  ];
  return (
    <ColorModeCtx.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeCtx.Provider>
  );
};
