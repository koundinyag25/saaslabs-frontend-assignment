// vite.config.js or vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Required for React Testing Library
    setupFiles: "./src/test/setup.js", // Path to your setup file (optional)
  },
});
