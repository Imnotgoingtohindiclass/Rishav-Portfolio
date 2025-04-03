import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    themePlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Updated
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: __dirname, // Updated
  build: {
    outDir: path.resolve(__dirname, "dist"), // Updated
    emptyOutDir: true,
    cssCodeSplit: false,
  },
});
