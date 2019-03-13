const typescript = require("rollup-plugin-typescript2")
const { terser } = require("rollup-plugin-terser")
const pkg = require("./package.json")

export default {
  input: "index.ts",
  /* output: {
    name: "prefetchImages",
    file: "index.js",
    format: "iife"
  }, */
  output: [
    {
      file: "index.amd.js",
      format: "amd"
    },
    {
      file: "index.cjs.js",
      format: "cjs"
    },
    {
      file: "index.esm.js",
      format: "esm"
    },
    {
      name: "prefetchImages",
      file: "index.iife.js",
      format: "iife"
    },
    {
      name: "prefetchImages",
      file: "index.umd.js",
      format: "umd"
    },
    {
      file: "index.system.js",
      format: "system"
    }
  ],
  //plugins: [typescript(), terser()]
  plugins: [typescript()]
}
