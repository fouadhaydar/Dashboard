import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: "./https/dashboard-privateKey.key",
      cert: "./https/dashboard.crt",
    },
  },
  define: {
    // 'process.env.BASE_URL':JSON.stringify()
  },
});
