import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig(({ mode }) => ({
  base: mode === "github-pages" ? "/ci-cd-test-app/" : "/",

  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
}));
