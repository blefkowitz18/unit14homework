var express = require("express");

var router = express.Router();

var burger = require("../models/models.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
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




  router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    cat.update({
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