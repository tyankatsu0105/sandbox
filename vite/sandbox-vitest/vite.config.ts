import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export const config: UserConfigExport = {
  plugins: [react()],
};

export default defineConfig(config);
