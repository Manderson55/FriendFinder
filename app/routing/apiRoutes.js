// Routes for Data
// Determines what data the user sees and what Data the user
// is able to Post to the Server to store
 

var possibleFriends = require('../data/friends.js');


module.exports = function(app) {

	// Get all possible friends
	app.get("/api/friends", function(req, res) {  //api call
	  res.json(possibleFriends);
	});

	app.post("/api/friends", function(req, res) {
	  // Look at the request body for the post information
	  // Push this post information object to the 'friends' array
	  possibleFriends.push(req.body);
	});

}