const main = (req, res) => {

	// process.env.FT_API = key
	const request = require('request');
	const options = {
		uri: 'http://api.ft.com/content/search/v1',
		qs: {
			'X-Api-Key': process.env.FT_API,
			'Content-Type': 'application/x-www-form-urlencoded',
			query: 'Something'
		},
	}

	request(options, (err, res, body) => {
		if (err) {
			console.log(err);
		}
		console.log(body);
	});

	res.render('headlines', {
		
	});

};

module.exports = main;