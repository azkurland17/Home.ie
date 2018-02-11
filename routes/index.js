var choresDB = require("../data/chores.json");
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', choresDB);
};

