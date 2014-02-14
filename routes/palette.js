var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	// get a random palette from the top ones
	var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	
// Commented out this:
	//res.send('Your random palette is called: ' + randomPalette['title']);

    //res.json(randomPalette);

    //res.json(randomPalette);

    var colors = res.json(randomPalette);



}