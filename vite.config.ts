import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { rmSync } from "fs";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {},
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    fs: {
      allow: [
        ".",
        "public", 
        "src" 
      ],
    },
  },
});

rmSync("dist", { recursive: true, force: true });
