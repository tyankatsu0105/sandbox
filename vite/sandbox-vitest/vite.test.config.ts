import { config as originalConfig } from "./vite.config";

import { defineConfig, UserConfigExport, loadEnv } from "vite";

import { InlineConfig } from "vitest";

// https://vitejs.dev/config/
export const config: UserConfigExport & {
  test: InlineConfig;
} = {
  ...originalConfig,
  mode: "test",
  test: {
    environment: "jsdom",
  },
};

export default defineConfig(config);
