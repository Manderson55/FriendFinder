// // Routes for HTML files - Directs the user
// =============================================================
var path = require("path");
var express = require("express");

module.exports = function (app) {  //***** WHy do we need to use a function here??? ************
	// Basic route that sends the user first to the Home Page
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../views/home.html"));
	});

	app.get("/survey.html", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../views/survey.html"));
	});
	// for all other routes not specified
    //app.use(express.static("./../public"));
	app.use(express.static('./app/public'));
  }