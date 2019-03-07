//const pkg = require("./package.json")
const typescript = require("rollup-plugin-typescript2")

export default {
  input: "index.ts",
  output: {
    file: "index.js",
    format: "iife"
  },
  plugins: [typescript()]
}
