const main = (req, res) => {
	const { name, email, country, gdpr } = req.body;
	console.log('name:', name);
	console.log('email:', email);
	console.log('country:', country);
	console.log('gdpr:', gdpr);

	res.render('form-result', {
		title: 'Success',
		pageTitle: 'Your submission was successful!',
		formName: name,
		formEmail: email,
		formCountry: country,
		formGDPR: gdpr
	});
};

module.exports = main;