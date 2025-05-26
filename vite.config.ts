import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Updated
    },
  },
  root: __dirname, // Updated
  build: {
    outDir: path.resolve(__dirname, "dist"), // Updated
    emptyOutDir: true,
    cssCodeSplit: false,
  },
});
