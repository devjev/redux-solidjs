import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import commonjs from "@rollup/plugin-commonjs";
import replace from "rollup-plugin-replace";

const extensions = [".js", ".jsx"];
const isDevelopmentMode = process.env.NODE_ENV !== "prod";

export default {
    input: ["src/index.js"],
    output: {
        name: "learn-redux",
        dir: "dist",
        format: "es",
        sourcemap: isDevelopmentMode,
    },
    treeshake: !isDevelopmentMode,
    preserveEntrySignatures: false,
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        babel({
            babelHelpers: "bundled",
            presets: ["solid"]
        }),
        resolve({ extensions }),
        commonjs(),
        !isDevelopmentMode && terser(),
        isDevelopmentMode && serve({ contentBase: "dist", host: "localhost", port: 3000 }),
        isDevelopmentMode && livereload({ watch: "dist", verbose: true })
    ]
};