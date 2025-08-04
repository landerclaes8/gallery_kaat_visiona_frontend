import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
//hier staat het adres vd server
export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Separate React into its own chunk
        },
      },
    },
  },
  server: {
    port: 4000,
    proxy: {
      "/api": {
        target: "https://www.backend.visiona.be",
        changeOrigin: true,
      },
    },
  },
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
