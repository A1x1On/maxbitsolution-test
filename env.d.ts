/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite-plugin-vue-layouts/client" />

interface ImportMetaEnv {
  readonly VITE_FRONTEND: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
