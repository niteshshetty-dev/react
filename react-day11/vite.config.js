import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // ✅ Fix for document-related errors
    setupFiles: "./setupTests.js",
    globals: true,
  },
});
