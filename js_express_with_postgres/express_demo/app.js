const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();

// This configures our express app to "ejs" to
// render its views (the HTML it responds with.)
app.set("view engine", "ejs");

// MIDDLEWARE

// Calling "morgan" returns a middleware function that
// we pass as a argument to app.use(). Everytime
// a request will be made to our this middleware function
// will be called.
app.use(morgan("dev"));

// STATIC ASSETS
// Use path.join to combine strings into directory paths.
// Example: path.join("Users", "sg") -> "User/sg"

// __dirname is a global variable useable inside scripts run by
// Node. It gives the full path beginning from root (i.e. /) to
// the file that contains __dirname.
const staticAssetsPath = path.join(__dirname, "public");
// console.log("Full path to app.js:", __dirname);
app.use(express.static(staticAssetsPath));

// URLENCODED MIDDLEWARE

// This middleware will decode data from forms using
// the POST method. The "extended" option will support
// arrays and objects in forms if set to true.
app.use(express.urlencoded({ extended: true }));
// This middleware will put the form's data in an
// object at `req.body` instead of `req.query`.

// COOKIE PARSER MIDDLEWARE

app.use(cookieParser());

// CUSTOM MIDDLEWARE

// With app.use, the callback handle any request regardless
// of its HTTP verb (or method).
app.use((req, res, next) => {
  // Access your cookies from the request object with
  // the .cookies properties. They are represented as
  // an object where each key correspond to the name
  // of cookie.
  // You install "cookie-parser" middleware to make
  // this available.
  console.log("Cookies:", req.cookies);
  const username = req.cookies.username;

  // Use res.locals to assign variables that globally
  // availabe all templates renderd with res.render()
  // The line below means all templates will have
  // variables named "username" containing an empty string.
  res.locals.username = "";

  if (username) {
    res.locals.username = username;
    console.log(`🤓 User's username is ${username}`);
  }

  // The third argument, "next", is a function that
  // when called tells Express that this middleware has completed
  // and it should move on to the one in line.
  next();
});

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

// WELCOME PAGE

app.get("/", (request, response) => {
  // `response.render(<ejs-filename>)` is used to
  // render an template from the "views/" directory.
  // Replace <ejs-filename> with a path to a file
  // beginning after the "views/" directory ignoring
  // the file extension.

  // The call below is looking for a file at
  // `./views/welcome.ejs`
  response.render("welcome");
});

// "/survey" is the URL path to get this route.
app.get("/survey", (request, response) => {
  // To make use of query string data, access with the query
  // property on the request object. Express will have converted to
  // a JavaScript object.
  console.log("Query string:", request.query);
  // "survey" in render() is the EXACT name of file inside of
  // "views/" without the extension (i.e. .ejs).
  response.render("survey");
});

// .../survey?fullName=Steve&timeOfDay=Morning&colour=%23942192
//     path  | query string

// A "query" is a way to represent in a url using the
// URL Encoding format.
// Following a url's path a query beings with "?".
// It is followed by key's and value's that correspong to
// the input's name and value respectively when form is submitted.
// ?[key]=[value]&[key]=[value]&[key]=[value]

app.get("/survey/results", (request, response) => {
  // Use response.send() with variables to check to display in the
  // browser as JSON. Here we use to display the contents
  // of `request.query`.
  // response.send(request.query);

  const fullName = request.query.fullName;
  const timeOfDay = request.query.timeOfDay;
  const color = request.query.color;

  // (optional) `response.render` can take an object as
  // a second argument. All property-value pairs of that
  // object will become variables named after the property
  // inside of the template's ejs file.
  response.render("surveyResults", {
    fullName: fullName,
    timeOfDay: timeOfDay,
    color: color
  });
});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;
app.post("/sign_in", (req, res) => {
  const username = req.body.username;

  // res.cookie(<cookie-name>, <cookie-value>, <options>)
  // 👆 is added to the response object by the "cookie-parser"
  // middleware. Use to create cookies setting them in
  // the response sent to the browser.
  // - The first argument is the name of the cookie
  // - The second argument is the cookie's value
  // - The last and optional argument are options for the
  //   cookie such as its maximum age.

  res.cookie("username", username, { maxAge: COOKIE_MAX_AGE });

  // Like res.send & res.render, res.redirect will terminate response
  // with a redirect status code and location (i.e. URL) where
  // the browser should make a GET request to (browsing to that URL).
  res.redirect("/");
});

app.post("/sign_out", (req, res) => {
  res.clearCookie("username");
  res.redirect("/");
});

// CRUD for POSTS

// Posts#new
// GET /posts/new
app.get("/posts/new", (req, res) => {
  res.render("posts/new");
});

const PORT = 4545;
const DOMAIN = "localhost"; // 127.0.0.1
app.listen(PORT, DOMAIN, () => {
  // app.listen() takes an optional third argument
  // which is callback that will called once the
  // server is ready to accept requests.

  console.log(`💻 Server listening on http://${DOMAIN}:${PORT}`);
});
