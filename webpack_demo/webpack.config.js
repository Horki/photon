const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dist = path.resolve(__dirname, "dist");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

var mainConfig = {
  entry: "./js/index.js",
  output: {
    path: dist,
    filename: "bundle.js"
  },
  devServer: {
    static: {
      directory: dist
    },
  },
  mode: "none",  
  experiments: {
    asyncWebAssembly: true,
  },
  ignoreWarnings: [
    (warning) => {
      const msg = warning.message;
      return (
        msg.includes("The following asset(s) exceed the recommended size limit (244 KiB).")
      );
    },
  ],
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       }
    ]
  },
  resolve: {
     extensions: [".js", ".wasm"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "../crate"),
      // WasmPackPlugin defaults to compiling in "dev" profile. To change that, use forceMode: 'release':
      forceMode: 'release'
    }),
  ]
};

// const workerConfig = {
//   entry: "./js/worker.js",
//   target: "webworker",
//   plugins: [
//     new WasmPackPlugin({
//       crateDirectory: path.resolve(__dirname, "../crate")
//     })
//   ],
//   resolve: {
//     extensions: [".js", ".wasm"]
//   },
//   output: {
//     path: dist,
//     filename: "worker.js"
//   }
// };


module.exports = [mainConfig]