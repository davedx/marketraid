import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Served from https://davedx.github.io/marketraid/
  base: "/marketraid/",
  plugins: [react(), tailwindcss()],
});
