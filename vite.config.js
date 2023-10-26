import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  build: {
    rollupOptions: {
      // Ensure Rollup can resolve image imports
      external: ["/Users/maxwell/portfolio_kode/src/assets/icon.png"],["/Users/maxwell/portfolio_kode/src/assets/duedu.jpg"]
    },
  },
};
