import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  Plugin: [react(), tsconfigPaths(), jsconfigPaths()],
  server: {
    port: 1234,
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
