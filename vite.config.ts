import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import process from 'process';

const repoName = 'artur-koza-www';

// https://vite.dev/config/
export default defineConfig({
  base: (process.env.NODE_ENV as string) === 'production' ? `/${repoName}/` : '/',
  plugins: [react(), svgr()],
  assetsInclude: ["**/*.JPG", "**/*.jpg"],
  optimizeDeps: {
    exclude: ["react-custom-scrollbars"],
  },
});
