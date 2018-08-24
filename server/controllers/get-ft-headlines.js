const fetch = require('isomorphic-fetch');
const main = (req, res) => {

	// process.env.FT_API = key
	const options = {
		method: 'POST',
		headers: {
			'X-Api-Key': process.env.FT_API,
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		body: JSON.stringify({
			'queryString': 'banks',
			'resultContext': {
				'aspects': ['title', 'lifecycle', 'location', 'summary', 'editorial']
			}
		})
	};

	fetch('http://api.ft.com/content/search/v1', options)
	.then((res) => {
		if (res.status === 400) {
			throw new Error(res.status + ' - ' + res.statusText);
		}
		console.log('🔔 ', res);
	})
	.catch((error) => {
		console.log('⛔️ ', error);
	});
	
	res.render('headlines', {

	});

};

module.exports = main;