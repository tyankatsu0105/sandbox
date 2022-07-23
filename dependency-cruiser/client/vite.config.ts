import pluginSVGR from "@svgr/rollup";
import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig, Plugin, UserConfig } from "vite";

/**
 * https://vitejs.dev/config/
 */
export const createConfig = (rootPath: string): UserConfig => {
  const alias = {
    "~api": path.resolve(rootPath, "src/api"),
    "~application": path.resolve(rootPath, "src/application"),
    "~ui": path.resolve(rootPath, "src/ui"),
  };

  return {
    plugins: [
      react({
        babel: {
          plugins: [
            [
              "babel-plugin-styled-components",
              {
                displayName: process.env.NODE_ENV !== "production",
              },
            ],
          ],
        },
      }),
      pluginSVGR() as unknown as Plugin,
    ],

    resolve: {
      alias,
    },
  };
};

const config = createConfig(__dirname);

export default defineConfig(config);
