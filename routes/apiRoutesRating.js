var db = require("../models");

module.exports = function(app) {
  // Get all ratings from services
  app.get("/api/serviceRating/:serviceId", function(req, res) {
    db.ratings.findAll({}).then(function(dbRatings) {
      res.json(dbRatings);
    });
  });

  // Create a new rating for a service
  app.post("/api/serviceRating", function(req, res) {
    db.ratings.create(req.body).then(function(dbRatings) {
      res.json(dbRatings);
    });
  });
// Get all comments from a particular service 
  app.get("/api/serviceComment/:serviceId", function(req, res) {
      db.ratings.findAll({}).then(function(dbRatings) {
          res.json(dbRatings);
      });
  });
// Creat a new post of a comment for a service
  app.post("/api/serviceComment", function(req, res) {
    db.ratings.create(req.body).then(function(dbRatings) {
        res.json(dbRatings);
    });
});
// Obtener el promedio del Rating de los Servicios de una tienda
// Pendiente: Colocar un where para que tome la informción del promedio del rating de servicios:
app.get("/api/storeRating/:storeId", function(req, res) {
    db.ratings.findAll({}).then(function(dbRatings) {
      res.json(dbRatings);
    });
  });


};
