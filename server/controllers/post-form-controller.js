const main = (req, res) => {
	const { name, email, country, gdpr } = req.body;
	// console.log('name:', name);
	// console.log('email:', email);
	// console.log('country:', country);
	// console.log('gdpr:', gdpr);

	const formData = require('./../models/form');
	const newFormInput = new formData({
		name: name,
		email: email,
		country: country,
		gdpr: gdpr
	});

	newFormInput.save((error) => {
		if (error) {
			const errorOutput = error.message;
			const errorCode = 'E11000';
			const errorMatch = errorOutput.includes(errorCode);
			const errorPrintOutput = errorMatch === true ? 'This email address is already in the database. Please try a different email address.' : error.message;

			res.render('form-error', {
				title: 'Not successful',
				pageTitle: 'Your submission was not successful',
				error: errorPrintOutput,
				redirect: '/form'
			});
		} else {
			res.render('form-result', {
				title: 'Success',
				pageTitle: 'Your submission was successful!',
				formName: name,
				formEmail: email,
				formCountry: country,
				formGDPR: gdpr
			});
		}
	});
};

module.exports = main;