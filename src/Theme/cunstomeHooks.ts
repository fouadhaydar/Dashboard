import { createTheme } from "@mui/material";
import { themeSettings } from "./constance";
import { useContext, useMemo, useState } from "react";
import { Mode } from "../type";
import { ColorModeCtx } from "./theme";

export const useMode = () => {
  const [mode, setMode] = useState<Mode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

export const useColor = () => {
  const { toggleColorMode } = useContext(ColorModeCtx);
  return { toggleColorMode };
};
