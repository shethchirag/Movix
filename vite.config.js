import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "https://api.themoviedb.org/3": "http://localhost",
    },
  },
  plugins: [react()],
});
