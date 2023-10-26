import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  build: {
    rollupOptions: {
      external: ["/Users/maxwell/portfolio_kode/src/assets/duedu.jpg"],
    },
  },
};
