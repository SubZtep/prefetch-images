const typescript = require("rollup-plugin-typescript2")
const { terser } = require("rollup-plugin-terser")
const pkg = require("./package.json")

export default {
  input: "index.ts",
  output: {
    name: "prefetchImages",
    file: "index.js",
    format: "iife"
  },
  plugins: [typescript(), terser()]
}
