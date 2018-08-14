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
  }
};
