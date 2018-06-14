const express = require("express");
const morgan = require("morgan");
const app = express();

// Calling "morgan" returns a middleware function that
// we pass as a argument to app.use(). Everytime
// a request will be made to our this middleware function
// will be called.
app.use(morgan("dev"));

// URL http://localhost:4545/hello_world
// scheme  | host     | port | path

// The "scheme" identifies the protocol being used.
// Typically, HTTP or HTTPS, but could be SSH, FTP, TCP, etc.

// The "host" identifies the domain or IP that is running
// the server.

// The "path" which identifies the specific resource
// a client makes a request to.

// The following method creates a "route" wich a callback
// that responds to a request.
// The tells our app to respond to request at the path
// "/hello_world" with the "Hello, World!".

// The first argument of app.get() is a path written as
// a string. The second argument is called that must
// complete a response to the client.
app.get("/hello_world", (request, response) => {
  // The "request" argument is an object that represents
  // the request being made by the client. It contains
  // information about the client and everything the client
  // is asking for.

  // The "response" argument is an object that represents
  // the server's reply to the client. Through the course
  // of a express app we will build the response then
  // finally send it.
  response.send("Hello, Universe!");
});

const PORT = 4545;
const DOMAIN = "localhost"; // 127.0.0.1
app.listen(PORT, DOMAIN, () => {
  // app.listen() takes an optional third argument
  // which is callback that will called once the
  // server is ready to accept requests.

  console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});
