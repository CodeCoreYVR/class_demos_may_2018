const path = require("path");

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
  }
};
