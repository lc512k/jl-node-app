const main = (req, res) => {
	res.render('form', {
		title: 'Form',
		pageTitle: 'Form Test',
		formDetails: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam doloremque pariatur delectus libero esse. Optio nisi earum qui! Minima, animi molestiae facere quas amet repellat ipsam atque! Facilis, accusantium atque?',
		formURL: '/form-submit'
	});
};

module.exports = main;