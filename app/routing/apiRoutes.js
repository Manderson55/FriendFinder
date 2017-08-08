//make an array with the information stored in friends.js
//from the survey results. 

var possibleFriends = require('../data/friends.js');


// Get all possible friends
app.get("/api/friends.js", function(req, res) {  //api call
  res.json(possibleFriends);
});

app.post("/api/friends", function(req, res) {
  // Look at the request body for the post information
  // Push this post information object to the 'friends' array
});