const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (options) => {
  return {
    entry: "./src/index.js",
    mode: "development",
    devServer: {
      port: 3003,
    },
    output: {
      publicPath: "auto",
      uniqueName: "angularjs",
    },
    optimization: {
      moduleIds: "named",
      chunkIds: "named",
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                presets: ["@babel/react", "@babel/env"],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "angular1App",
        library: { type: "var", name: "angularjs" },
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/app.js",
        },

        // shared: ["react", "react-dom"],
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
};
