import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "https://movix-brown-seven.vercel.app/": "http://localhost",
    },
  },
  plugins: [react()],
});
