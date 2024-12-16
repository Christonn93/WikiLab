import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { rmSync } from "fs";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
    },
    outDir: "dist",
    emptyOutDir: true, 
  },
  server: {
    fs: {
      allow: ["."],
    },
  },
});
rmSync("dist", { recursive: true, force: true });
