var choresDB = require("../data/chores.json");
exports.addChore = function(req, res){

	let chore = {
		name: req.query.name,
		description: req.query.description,
		imageURL: 'https://lorempixel.com/400/400/people'
    //priority: req.query.priority
	}

	console.log("BREAK");
	console.log("the Chore to push is ", chore);
	console.log("BREAK");
	choresDB.chores.push(chore);
	res.render("index", choresDB);
}
