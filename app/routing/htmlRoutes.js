// // Routes
// =============================================================

// Basic route that sends the user first to the Home Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey.html", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.use(express.static('public'));