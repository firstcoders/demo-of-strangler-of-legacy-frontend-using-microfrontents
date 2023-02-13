const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3002,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "lazyStyleTag",
              // @see https://github.com/webpack-contrib/style-loader#function
              insert: function insertIntoTarget(element, options) {
                // Do not forget that this code will be used in the browser and not all browsers support latest ECMA features like let, const, arrow function expression and etc, we recommend use only ECMA 5 features, but it is depends what browsers you want to support
                var options = options || {};
                var parent = options.target || document.head;
                console.debug("Adding styles to target", parent);
                parent.appendChild(element);
              },
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: "reactApp",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
        "./routes": "./src/routes",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
