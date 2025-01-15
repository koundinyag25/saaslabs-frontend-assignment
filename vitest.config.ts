import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // Required for React Testing Library
    setupFiles: "./src/test/setup.js", // Path to your setup file (optional)
  },
});
