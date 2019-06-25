var express = require("express");
var router = express.Router();

// Import the model (store.js) to use its database functions.
var Store = require("../models/Store.js");
var HomeController = require ("../controllers/HomeController")

app.get("/", function (req, res) {
  var random = [];
  for (var i = 0; i < 3; i++) {
    var IdRand = Math.floor(Math.random() * 20);
    random.push(IdRand);
  };

  db.Places.findAll({
    where: {
      id: {
        [Op.or]: random
      }
    }
  }).then(function (dbExamples) {
    res.render("index", {
      places: dbExamples,
    });
  });
});

// Export routes for server.js to use.
module.exports = router;
