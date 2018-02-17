var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgObject = {
      burgers: data
    };
    console.log(burgObject);
    res.render("index", burgObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.name, false
  ], function(result) {
    console.log("Posted")
    
    //res.json({ id: result.insertId });
    res.redirect('/')
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: true
  }, condition, function(result) {
    
    res.redirect('/')

  });
});


module.exports = router;