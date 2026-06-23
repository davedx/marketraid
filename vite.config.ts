import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Served from the apex custom domain https://marketraid.us/ (root path).
  base: "/",
  plugins: [react(), tailwindcss()],
});
