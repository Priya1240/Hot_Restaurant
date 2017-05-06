// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Reservation (DATA)
// =============================================================
var newReservation = [{
    customerName: "Barack Obama",
    customerEmail: "POTUS44@usa.gov",
    customerID: 001,
    phoneNumer: 2124339692
}, {
    customerName: "Gloria Jean Watkins",
    customerEmail: "bhooks@cuny.edu",
    customerID: 002,
    phoneNumer: 2124569876
}, {
    customerName: "Isa Harrison",
    customerEmail: "isabella.harrison@mica.edu",
    customerID: 003,
    phoneNumer: 2124556696
}];

// =============================================================
// ROUTES
// =============================================================


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "main.html"));
    //creates absolute path to the file "view.html", depending on where the server is running
});

app.get("/reserve", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "reserve.html"));
    //creates absolute path to the file "view.html", depending on where the server is running
});

app.get("/tables", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "tables.html"));
    //creates absolute path to the file "view.html", depending on where the server is running
});
// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:tables?", function(req, res) {
    var chosen = req.params.tables;

    // if (chosen) {
    //     console.log(chosen);

        for (var i = 0; i < newReservation.length; i++) {

            return res.json(newReservation[i]);
        }

        return res.json(false);
    // }
    return res.json(newReservation);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newtable = req.body;

    console.log(newtable);

    // We then add the json the user sent to the character array
    tables.push(newtable);

    // We then display the JSON to the users
    res.json(newtable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
