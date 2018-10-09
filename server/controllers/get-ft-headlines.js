const fetch = require('isomorphic-fetch');
const main = async (req, res) => {

	try {
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

		const data = await fetch('http://api.ft.com/content/search/v1', options);
		const resBody = await data.json();

		if (res.status === 400) {
			throw new Error(res.status + ' - ' + res.statusText);
		}

		const results = await resBody.results[0].results;
		console.log('😎 ', 'the fetch request got processed');

		res.render('headlines', {
			pageTitle: 'Hello Headlines',
			results: results,
		});
	}
	catch(error) {
		console.log('📛 ', error);
	}
	finally {
		console.log('👍 ', 'async/await operations completed');
	}
};

module.exports = main;