const main = (req, res) => {

	// process.env.FT_API = key
	const fetch = require('isomorphic-fetch');
	let options = {
		method: 'POST',
		body: {
			'queryString': 'banks',
			'resultContext': {
				'aspects': ['title', 'lifecycle', 'location', 'summary', 'editorial']
			}
		},
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'X-Api-Key': process.env.FT_API,
		}
	};

	fetch('http://api.ft.com/content/search/v1', options)
	.then((res) => {
		console.log('🔔 =>', res);
	})
	.catch((error) => {
		throw new Error(error);
	});

	res.render('headlines', {

	});

};

module.exports = main;