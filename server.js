// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); /// included in Node

// Sets up the Express App
// =============================================================
var app = express();
// this variable will allow us to use our local host(3000 in this case)
// or whatever port is defined by the deployment site so we don't have to 
// reconfigure it
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
//parse application/json
app.use(bodyParser.json());

// ????????????????????
app.use(bodyParser.json({ type: "application/vnd.api+json" })); 

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); // true or false ????????????

// ??????????????????
app.use(bodyParser.text());

app.use(express.static(__dirname + "/public"));

// adding our html routes to the server
require("./app/routing/htmlRoutes.js")(app);

// adding our api routes to the server
require("./app/routing/apiRoutes.js")(app);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
