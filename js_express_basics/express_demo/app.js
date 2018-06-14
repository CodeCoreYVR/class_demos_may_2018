const express = require("express");
const app = express();

app.get("/hello_world", (request, response) => {
  response.send("Hello, World!");
});

const PORT = 4545;
const DOMAIN = "localhost"; // 127.0.0.1
app.listen(PORT, DOMAIN, () => {
  // app.listen() takes an optional third argument
  // which is callback that will called once the
  // server is ready to accept requests.

  console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});
