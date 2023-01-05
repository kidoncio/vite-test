import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import typescript2 from "rollup-plugin-typescript2";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslintPlugin(),
    vue(),
    typescript2({
      check: false,
      include: ["src/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
        exclude: ["vite.config.ts", "main.ts"],
      },
    }),
  ],
  resolve: {
    alias: {
      '~components': resolve(__dirname, 'src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          // just variables loaded globally
          @import "./src/Global.scss";
        `
      }
    }
  },
  build: {
    cssCodeSplit: false,
    lib: {
      "formats": ["es", "umd"],
      entry: resolve(__dirname, 'src/plugin/DreamshaperComponents.ts'),
      name: "DreamshaperComponents",
      fileName: 'dreamshaper-components',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        sourcemap: false,
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
