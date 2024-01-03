import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserProvider } from "./context/UserCtx.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ColorCtxprovider } from "./Theme/theme.tsx";
import { CssBaseline } from "@mui/material";
import { ImageCtxProvider } from "./scenes/newProduct/context/ImageCtxProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./constant.tsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <ImageCtxProvider>
        <ColorCtxprovider>
          <QueryClientProvider client={queryClient}>
            <CssBaseline />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ColorCtxprovider>
      </ImageCtxProvider>
    </UserProvider>
  </React.StrictMode>
);
