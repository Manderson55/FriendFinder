// Routes for Data
// Determines what data the user sees and what Data the user
// is able to Post to the Server to store
 
//set a variable to hold the possible friend matches array
var friends = require('../data/friends.js');


module.exports = function(app) {

	// Get all possible friends
	app.get("/api/friends", function(req, res) {  //api call
	  res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
	  // Look at the request body for the post information
	  // Push this post information object to the 'friends' array

	  var newFriend = req.body;
	  console.log(newFriend);

	  var newFriendAnswers = newFriend.answers;
	  console.log(newFriendAnswers);


	  var matchName = "",
	  matchPhotoURL = "",
	  matchDifference = 0;


	 var totalDifference = 100; // Make the initial value big for comparison

	 console.log("There are " + friends.length + " possible matches");
	  // Loop through the friends array
	  for (var i = 0; i < friends.length; i++) {
	  	console.log('friend = ' + JSON.stringify(friends[i]));
		// Set a variable to hold the score for each  possible match
		var difference = 0;

			//loop through the answers array of the existing friends in friends.js
			for (var j = 0; j < newFriendAnswers.length; j++) {

				var possibleMatch = parseInt(friends[i].answers[j]);
				console.log("possible match answer = " + possibleMatch);
				var newFriendMatch = parseInt(newFriendAnswers[j]);
				console.log("new friends aswer = " + newFriendMatch);
				difference += Math.abs( possibleMatch - newFriendMatch);
				console.log(difference);
			} //end second loop
		  		// If lowest difference, record the friend match
		  		if (difference < totalDifference) {
		  			console.log("Closest match found = " + difference);
		  			console.log("Friend name = " + friends[i].name);
		  			console.log("Friend image = " + friends[i].photoURL);
		  			totalDifference = difference;
		  			matchDifference = difference;
		  			matchName = friends[i].name;
		  			matchPhotoURL = friends[i].photoURL;
			    } //end if

		    } // end 1st loop

		friends.push(newFriend);

		res.json({status: "OK", matchName: matchName, matchPhotoURL : matchPhotoURL});

  });
 }

