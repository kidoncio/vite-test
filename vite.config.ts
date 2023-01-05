import { defineConfig } from 'vite'
import { existsSync, readdirSync, lstatSync, rmdirSync, unlinkSync } from 'fs'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

emptyDir(resolve(__dirname, 'dist'))
emptyDir(resolve(__dirname, 'types'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslintPlugin(),
    dts({
      libFolderPath: './node_modules/typescript/lib',
      outputDir: ['dist', 'types'],
      staticImport: true,
      skipDiagnostics: false,
      logDiagnostics: true,
      rollupTypes: true,
      insertTypesEntry: true
    }),
    vue(),
    vueJsx(),
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
      formats: ["es", "umd"],
      entry: resolve(__dirname, 'src/plugin/main.ts'),
      name: "DreamshaperComponents",
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})

function emptyDir(dir: string): void {
  if (!existsSync(dir)) {
    return
  }

  for (const file of readdirSync(dir)) {
    const abs = resolve(dir, file)

    // baseline is Node 12 so can't use rmSync
    if (lstatSync(abs).isDirectory()) {
      emptyDir(abs)
      rmdirSync(abs)
    } else {
      unlinkSync(abs)
    }
  }
}
