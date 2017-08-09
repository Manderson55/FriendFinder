// // Routes for HTML files - Directs the user
// =============================================================
var path = require("path");
var express = require("express");

module.exports = function (app) {  //***** WHy do we need to use a function here??? ************
	// Basic route that sends the user first to the Home Page
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

//	app.get( function(req, res) {
//	  res.sendFile(path.join(__dirname, "/../public/home.html")); // **** which one to use???????????
//	});

	app.get("/survey.html", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	app.use(express.static("/../public"));

}

