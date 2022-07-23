/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STAGE: "production" | "local" | "test";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
