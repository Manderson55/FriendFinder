// Get all possible friends
app.get("app/data/friends.js", function(req, res) {  //api call
  res.json(friends);
});

app.post("/postReservationData", function(req, res) {
  // Look at the request body for the post information
  // Push this post information object to the 'friends' array
});