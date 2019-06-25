import { Store } from "../models";

modules.export = {
  findLatest: function() {
    console.log("HEYYYYYY")
    Store.findAll(
      where: {
        id: 1

      }
    ).then((result)=> {
      return result
    })
  }
}

var Sequelize = require("sequelize");
const Op = Sequelize.Op;


  db.Places.findAll({
    where: {
      id: {
        [Op.or]: random
      }
    }
  }).then(function (dbExamples) {
    res.render("index", {
      places: dbExamples,
      lon: 19.426,
      lat: -99.1228881,
      zoom: 12
    });
  });
