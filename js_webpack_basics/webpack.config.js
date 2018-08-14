const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // You can specify the "entry" files in
  // multiple ways.
  // entry: "./src/client.js"
  // Use array for multiple entries.
  // entry: [ "./code/client.js", "./code/server.js" ]
  // You can also use an object for single or multiple
  // entries. When doing so the keys act as names, which
  // well be used when naming the output files.
  entry: {
    client: "./src/client.js",
    server: "./src/server.js"
  },
  output: {
    // `path` property is used specify the directory
    // where our bundle files will be created.
    path: path.join(__dirname, "build"),
    // `filename` property specifies the naming
    // of the bundles. Use `[name]` in the name
    // to interpolate the name of entry file
    // as specified by the keys in the `entry` property
    // of this config file. (e.g. client, server)
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        // The test below will apply this
        // rule when an imported file ends
        // in either .png, .jpg or .gif.
        test: /\.(png|jpg|gif)$/,
        // The `loader` is a package that we install
        // that tells Webpack how to process files
        // other JavaScript.
        loader: "file-loader",
        // Every loader will have their own set of options.
        // Configure these with the `options` property
        // in the rule.
        options: {
          outputPath: "images/"
        }
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"]
        // use: [
        //   {loader: "style-loader"},
        //   {loader: "css-loader", options: {}}
        // ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "🌍 Webpack Demo", // Tab title of the web page
      chunks: ["client"]
      // Only include bundle named "client" ignoring
      // bundle named "server"
    })
  ]
};
