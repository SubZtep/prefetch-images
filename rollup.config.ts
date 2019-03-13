const typescript = require("rollup-plugin-typescript2")
const { terser } = require("rollup-plugin-terser")

export default {
  input: "index.ts",
  output: {
    file: "index.js",
    format: "esm"
  },
  plugins: [typescript(), terser()]
}
