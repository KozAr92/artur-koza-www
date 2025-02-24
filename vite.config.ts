import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const repoName = 'artur-koza-www';

// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react(), svgr()],
  assetsInclude: ["**/*.JPG", "**/*.jpg"],
  optimizeDeps: {
    exclude: ["react-custom-scrollbars"],
  },
});
