var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burger_name", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("burger_name", cols, vals, function(res) {
      cb(res);
    });
  },
};

module.exports = burger;