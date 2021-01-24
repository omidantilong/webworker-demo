import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import nodePolyfills from "rollup-plugin-node-polyfills"
import globals from "rollup-plugin-node-globals"
import copy from "rollup-plugin-copy"
//import livereload from "rollup-plugin-livereload"
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
        targets: [{ src: "src/static/.", dest: "public" }],
      }),

      resolve(),
      commonjs(),
      nodePolyfills(),
      globals(),
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
    plugins: [resolve(), commonjs(), nodePolyfills(), globals()],
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
