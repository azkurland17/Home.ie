var jasonDB = require("../data/DB.json");

exports.view = function(req, res){
  res.render('stats', jasonDB);
};
