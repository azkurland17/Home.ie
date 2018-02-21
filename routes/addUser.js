var jasonDB = require("../data/DB.json");

exports.addUser = function(req, res){	

	let user = {
		name: req.body.name,
		url: req.body.url
	}

	console.log("BREAK");
	console.log("the user to push is ", user);
	console.log("BREAK");

	if(req.body.name){
		jasonDB.users.push(user);
	}
	res.render("index", jasonDB);

}
