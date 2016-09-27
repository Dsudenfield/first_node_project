var fs = require('fs')

var data = fs.readFile('input.txt', function (err, data) {
	if(err) {
		console.log(err.stack);
		return
	}
	console.log(data.toString());
});

console.log('program ended')