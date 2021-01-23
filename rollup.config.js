import resolve from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"
import nodePolyfills from "rollup-plugin-node-polyfills"
import globals from "rollup-plugin-node-globals"
import postcss from "rollup-plugin-postcss"
import copy from "rollup-plugin-copy"
//import livereload from "rollup-plugin-livereload"

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH

export default [
  {
    input: "src/js/main.js",
    output: {
      file: "public/app.js",
      format: "iife",
      sourcemap: true,
      name: "workerDemo",
    },

    watch: {
      clearScreen: false,
    },
    plugins: [
      copy({
        targets: [
          { src: "src/static/.", dest: "public" },
          { src: "src/assets/*", dest: "public" },
        ],
      }),

      resolve(),
      commonjs(),
      nodePolyfills(),
      globals(),
      postcss({
        plugins: [],
      }),

      babel({ babelHelpers: "bundled" }),
      production && terser(),
    ],
  },
  {
    input: "src/js/webWorker.js",
    output: {
      file: "public/app.webWorker.js",
      format: "iife",
      sourcemap: true,
      name: "webWorker",
    },
    plugins: [
      resolve(),
      commonjs(),
      nodePolyfills(),
      globals(),
      babel({ babelHelpers: "bundled" }),
      production && terser(),
    ],
  },
  /*{
    input: "src/js/serviceWorker.js",
    output: {
      file: "public/app.serviceWorker.js",
      format: "iife",
      sourcemap: true,

      name: "serviceWorker",
    },
    plugins: [
      resolve(), 
      commonjs(),
      nodePolyfills(),
      globals(),
      babel({ babelHelpers: "bundled" }),
      production && terser(), 
    ],
  },*/
]
