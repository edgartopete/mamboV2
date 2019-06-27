// Create for store
app.post("/api/examples", function (req, res) {
  db.Example.create(req.body).then(function (dbExample) {
    res.json(dbExample);
  });
});

// Create for services