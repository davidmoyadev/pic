import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@shared": resolve(__dirname, "./src/shared"),
      "@test": resolve(__dirname, "./test"),
    },
  },
  test: {
    globals: true,
    environment: "node",
    include: ["test/**/*.spec.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "test/", "dist/"],
    },
  },
});
