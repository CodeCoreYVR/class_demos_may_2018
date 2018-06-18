// When creating a new file, you will have to
// re-require whatever that this file needs even
// if these module are already required "app.js"
// or any other files.
const express = require("express");
const knex = require("../db/client");
// When building routes in seperate files from "app.js",
// we express.Router() to generate a route instance of
// express() to create an "app" instance.
const router = express.Router();

// CRUD for POSTS

// Posts#new
// GET /posts/new
router.get("/new", (req, res) => {
  res.render("posts/new");
});

// Posts#create
// POST /posts
router.post("/", (req, res) => {
  // console.log(
  //   // When using knex, you can terminate your
  //   // with the `.toString()` which will display the
  //   // SQL code that is generate without executing
  //   // in your db.
  //   knex
  //     .select("*")
  //     .from("posts")
  //     .toString()
  // );

  // https://knexjs.org/#Builder-insert
  knex
    .insert({
      // When using knex.insert(), we pass it an object
      // where each key correspond to a column from the table
      // each value will data for the inserted row.
      pictureUrl: req.body.pictureUrl,
      description: req.body.description,
      username: req.cookies.username
    })
    .into("posts")
    .returning("*")
    .then(result => {
      console.log("Posts insert result:", result);
      res.send(result);
    });
});

// To able to use this file in other files, you
// must export a value (e.g. array, object, number, string, class, etc.)
// For this file, we'll export the "router" to be able to
// connect to our app instance in "app.js".
module.exports = router;
// Whatever value is assigned to "module.exports"
// will be returned by "require" when this file
// is required.
