const fetch = require('isomorphic-fetch');
const main = (req, res) => {

	// process.env.FT_API = key
	const options = {
		method: 'POST',
		headers: {
			'X-Api-Key': process.env.FT_API,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			'queryString': 'Trump',
			'resultContext': {
				'maxResults': 10,
				'aspects': ['title', 'lifecycle', 'location', 'summary', 'editorial']
			}
		})
	};

	fetch('http://api.ft.com/content/search/v1', options)
	.then((res) => {
		if (res.status === 400) {
			throw new Error(res.status + ' - ' + res.statusText);
		}
		const resBody = res.json();
		return resBody;
	})
	.then((resBody) => {
		const results = resBody.results[0].results;
	
		res.render('headlines', {
			pageTitle: 'Hello Headlines',
			results: results,
		});
	})
	.catch((error) => {
		console.log('⛔️ ', error);
	});
};

module.exports = main;