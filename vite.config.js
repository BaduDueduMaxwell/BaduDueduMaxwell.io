import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  build: {
    rollupOptions: {
      // Ensure Rollup can resolve image imports
      external: [
        "./src/assets/icon.png",
        "./src/assets/duedu.jpg",
        "./src/assets/github.png",
        "./src/assets/linkedin.png",
        "./src/assets/medium.png",
        "./src/assets/twitter.png",
        "./src/assets/project_assets/wewire.png",
        "./src/assets/project_assets/ogateway.png",
        "./src/assets/project_assets/kiboNavigator.png",
        "./src/assets/project_assets/afrotour.png",
      ],
    },
  },
};
