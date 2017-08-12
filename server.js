// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); // included in Node

// Sets up the Express App  - tells Node we are creating an Express Server
// =============================================================
var app = express();


// this PORT variable allows us to use our local host(3000 in this case)
// or whatever port is defined by the deployment site so we don't have to 
// reconfigure it
var PORT = process.env.PORT || 3000;

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" })); 
app.use(bodyParser.urlencoded({ extended: true })); // true or false ????????????
app.use(bodyParser.text());



// ================================================================================
// ROUTES
// These routes give our server a "map" of how to respond when users visit or 
// request data from various URLs. 
// ================================================================================
// adding our html routes to the server
// require("./app/routing/htmlRoutes.js")(app);
var htmlRoutes = require("./app/routing/htmlRoutes.js");
htmlRoutes(app);
// adding our api routes to the server
require("./app/routing/apiRoutes.js")(app);
//this route will direct our server to routes not specified like css or images
// app.use(express.static('./app/public'));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
