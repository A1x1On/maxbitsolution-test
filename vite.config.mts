// Plugins
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Fonts from "unplugin-fonts/vite";
import Layouts from "vite-plugin-vue-layouts";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";

// Utilities
import { defineConfig, loadEnv } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      vue(),
      VueRouter({
        dts: "src/typed-router.d.ts",
      }),
      Layouts(),
      AutoImport({
        imports: [
          "vue",
          {
            "vue-router/auto": ["useRoute", "useRouter"],
          },
        ],
        dts: "src/auto-imports.d.ts",
        eslintrc: {
          enabled: true,
        },
        vueTemplate: true,
      }),
      Components({
        dts: "src/components.d.ts",
      }),
      Fonts({
        google: {
          families: [
            {
              name: "Roboto",
              styles: "wght@100;300;400;500;700;900",
            },
          ],
        },
      }),
    ],
    define: { "process.env": {} },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
      extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
    },
    server: {
      port: Number(env.VITE_BACKEND_PORT),
    },
    css: {
      preprocessorOptions: {
        sass: {
          api: "modern-compiler",
        },
      },
    },
  };
});
