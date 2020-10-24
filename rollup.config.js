import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import commonjs from "rollup-plugin-commonjs";

const extensions = [".js", ".jsx"];

module.exports = {
  input: ["./src/index.js", "./src/scripts/index.js", "./src/utils/storage.js"],
  output: {
    // file: "./dist/index.js",
    format: "cjs",
    sourcemap: true,
    dir: "./dist/",
    preserveModules: true,
    name: "DemoComponents",
    globals: {
      react: "React"
    },
    exports: "auto"
  },
  plugins: [
    babel({
      extensions,
      include: ["./src/**"],
      exclude: "node_modules/**"
    }),
    commonjs({ extensions }),
    uglify()
  ],
  external: [
    /@material-ui.*/,
    /i18next.*/,
    "lodash",
    "notistack",
    "prop-types",
    "react",
    "react-markdown",
    "react-router-dom",
    "react-smooth-dnd"
  ]
};
