var express = require("express");

var router = express.Router();

var burger = require("../models/models.js");

router.get("/", function(req, res) {
  console.log("hello world")
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/", function(req, res) {
    burger.create([
      "burger_name"
    ], [
      req.body.burger_name
    ], function(result) {
        console.log("New Burger Added");
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });




  router.put("/", function(req, res) {
    var condition = "id = " + req.params.id;
   
    console.log("condition", condition);
  
    burger.update({
      eaten: req.body.eaten
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    cat.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  module.exports = router;