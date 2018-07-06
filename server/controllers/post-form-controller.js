const main = (req, res) => {
	console.log('req.body.name:', req.body.name);
	console.log('req.body.email:', req.body.email);
	console.log('req.body.country:', req.body.country);
	console.log('req.body.gdpr:', req.body.gdpr);

	res.render('form-result', {
		title: 'Success',
		pageTitle: 'Your submission was successful!',
		formName: req.body.name,
		formEmail: req.body.email,
		formCountry: req.body.country,
		formGDPR: req.body.gdpr
	});
};

module.exports = main;