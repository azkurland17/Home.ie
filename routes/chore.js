var choresDB = require("../data/chores.json");
exports.view = function(req, res){
  res.render('createChore');
};