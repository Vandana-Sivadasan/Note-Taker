var express = require("express");
var path = require("path");
var notetitle = require("./notetitle");
var notetext = require("./notetext");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


    



// Routes
// =============================================================

// Basic route that sends the user first to the json Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//add 
app.get(" `/notes`", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});



// add
app.get("`*`", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));




 // Displays a single character, or returns false
       app.delete("/api//:character", function(req, res) {
    var chosen = req.params.character;
    console.log(chosen);
    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }
    return res.json(false);
}); 

// posting table data reserving - takes in JSON input

// and a waitlist post route


app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    tables.push(newReservation);

    res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});